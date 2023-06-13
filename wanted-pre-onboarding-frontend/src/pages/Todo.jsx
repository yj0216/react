import React from 'react';
import styled from 'styled-components';
import TodoList from './../components/TodoList';
import { useState, useEffect } from 'react';
import axios from 'axios';

// 시간 구하는 함수
function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ('0' + (1 + date.getMonth())).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);

  return year + '.' + month + '.' + day;
}

export default function Todo() {
  // 서버에서 받아오는 데이터
  const [todos, setTodos] = useState([]);
  // 추가하는 데이터
  const [list, setList] = useState('');

  // 서버에서 값을 받아오는 함수
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const getData = async () => {
      await axios
        .get(`${process.env.REACT_APP_BACK_URL}/todos`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setTodos(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [todos]);

  // list 추가
  const addTodo = async () => {
    const token = localStorage.getItem('access_token');
    const postData = await axios
      .post(
        `${process.env.REACT_APP_BACK_URL}/todos`,
        {
          todo: `${list}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        console.log('성공:', res);
        setList('');
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          // 400 에러가 발생한 경우
          alert('아무것도 적히지 않았습니다.');
        } else {
          console.log('오류!:', err);
        }
      });

    return postData;
  };

  return (
    <TodoStyle>
      <div>
        <h2>Today</h2>
        <span>{getToday()}</span>
        <div>
          <div>
            <div className="middle-line">
              <b>계획</b>
              <div>
                <input
                  type="text"
                  value={list}
                  onChange={(e) => {
                    setList(e.target.value);
                  }}
                  placeholder="오늘 계획을 입력하세요"
                />
                <button onClick={addTodo} />
              </div>
            </div>
            <ul>
              {todos.map((todo) => {
                return <TodoList key={todo.id} props={todo} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </TodoStyle>
  );
}

const TodoStyle = styled.div`
  padding: 50px;
  .middle-line {
    padding-top: 20px;
  }
  .middle-line b {
    font-size: 20px;
    width: 80px;
  }
  .middle-line div {
    padding-top: 10px;
  }
  .middle-line button {
    position: absolute;
    background: url('https://cdn-icons-png.flaticon.com/512/1250/1250611.png')
      no-repeat;
    background-size: 26px;
    left: 230px;
    border: 0px;
    width: 26px;
    height: 28px;
    cursor: pointer;
  }
`;
