import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
export default function TodoList({ props }) {
  // todo 정보
  const [todo, setTodo] = useState({
    todo: props.todo,
    isCompleted: props.isCompleted,
  });
  // 수정 중 인지 확인
  const [status, setStatus] = useState({
    status: true,
    isCompleted: todo.isCompleted
  });

  // 리스트 삭제
  const deleteList = () => {
    const deleteData = async () => {
      const token = localStorage.getItem('access_token');
      await axios
        .delete(`${process.env.REACT_APP_BACK_URL}/todos/${String(props.id)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log('성공:', res);
        })
        .catch((err) => {
          console.log('실패:', err);
        });
    };
    return deleteData();
  };

  // 리스트 수정
  const updateList = () => {
    const updateData = async () => {
      const token = localStorage.getItem('access_token');
      await axios
        .put(
          `${process.env.REACT_APP_BACK_URL}/todos/${String(props.id)}`,
          {
            todo: `${todo.todo}`,
            isCompleted: todo.isCompleted,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          console.log('성공:', res);
          setStatus({ ...status, status: true });
        })
        .catch((err) => {
          if (err.response && err.response.status === 400) {
          } else {
            console.log('실패:', err);
          }
        });
    };
    return updateData();
  };

  return (
    <ListStyle>
      <li>
        <div>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => {
              let copy = todo;
              copy.isCompleted = e.target.checked;
              setTodo(copy);
              if (status.status) updateList();
            }}
          />
          {status.status ? (
            <>
              <span>{props.todo}</span>
              <div>
                <input
                  type="button"
                  className="modify-button"
                  onClick={() => {
                    setStatus({ ...status, status: false });
                    setTodo({ ...todo, todo: props.todo });
                  }}
                />
                <input
                  type="button"
                  className="delete-button"
                  onClick={deleteList}
                />
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                value={todo.todo}
                onChange={(e) => {
                  setTodo({ ...todo, todo: e.target.value });
                }}
              />
              <div>
                <input
                  type="button"
                  className="modify-button"
                  onClick={updateList}
                />
                <input
                  type="button"
                  className="cancle-button"
                  onClick={() => {
                    setStatus({ ...status, status: true });
                  }}
                />
              </div>
            </>
          )}
        </div>
      </li>
    </ListStyle>
  );
}

const ListStyle = styled.div`
  list-style: none;
  span {
    padding-left: 10px;
  }
  div div input {
    margin-left: 5px;
    border: 1px solid black;
    cursor: pointer;
  }
  div div {
    display: inline-block;
  }
  .modify-button {
    background: url('https://cdn.icon-icons.com/icons2/2469/PNG/512/edit_modify_icon_149488.png')
      no-repeat;
    background-size: 10px;
    background-position: 4px;
    width: 20px;
    height: 15px;
  }
  .delete-button {
    background: url('https://cdn-icons-png.flaticon.com/512/6398/6398171.png')
      no-repeat;
    background-size: 10px;
    background-position: 3px;
    width: 20px;
    height: 15px;
  }
  .cancle-button {
    background: url('https://cdn-icons-png.flaticon.com/512/594/594864.png')
      no-repeat;
    background-size: 10px;
    background-position: 3px;
    width: 20px;
    height: 15px;
  }
`;
