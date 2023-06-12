import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [notAllow, setNotAllow] = useState(true);
  const regurl = /@/;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [checkUser, setCheckUser] = useState({
    emailCheck: false,
    passwordCheck: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (checkUser.emailCheck && checkUser.passwordCheck) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [checkUser.emailCheck, checkUser.passwordCheck]);

  const emailConfirm = (e) => {
    if (regurl.test(e)) {
      setCheckUser({
        ...checkUser,
        emailCheck: true,
      });
    } else {
      setCheckUser({
        ...checkUser,
        emailCheck: false,
      });
    }
  };

  const passwordConfirm = (e) => {
    if (e.length >= 8) {
      setCheckUser({
        ...checkUser,
        passwordCheck: true,
      });
    } else {
      setCheckUser({
        ...checkUser,
        passwordCheck: false,
      });
    }
  };

  const loginSuccess = async () => {
    const loginCheck = await axios
      .post(`${process.env.REACT_APP_BACK_URL}/auth/signin`, user)
      .then((response) => {
        console.log('성공 적인 로그인', response);
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/todos');
      })
      .catch((err) => {
        console.log('error!:', err);
        alert('이메일 또는 비밀번호가 유효하지 않습니다.');
      });

    return loginCheck;
  };
  return (
    <LoginStyle>
      <div className="login-form">
        <h1>로그인</h1>
        <div>
          <div className="input-line">
            <span>이메일</span>
            <div>
              <input
                type="text"
                data-testid="email-input"
                placeholder="이메일을 입력해주세요"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                  emailConfirm(e.target.value);
                }}
              />
            </div>
            <span>비밀번호</span>
            <div>
              <input
                type="password"
                data-testid="password-input"
                placeholder="비밀번호를 입력해주세요(8자리 이상)"
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                  passwordConfirm(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="login-form-button">
            <input
              type="button"
              data-testid="signin-button"
              disabled={notAllow}
              value="로그인"
              onClick={loginSuccess}
            />
            <Link to="/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 100%;
  height: 98.5vh;
  max-width: 400px;
  padding: 5px 20px;

  background-color: #e1fff5;
  h1 {
    justify-content: start;
    padding-top: 30px;
  }
  span {
    font-size: 18px;
    padding-right: 310px;
  }
  .login-form {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }
  .input-line div {
    padding: 10px;
    input {
      width: 380px;
      height: 40px;
      border-radius: 10px;
    }
  }

  .login-form-button {
    position:absolute;
    bottom:20px;
    input {
      width: 390px;
      height: 40px;
      border: 2px solid white;
      border-radius: 10px;
      background-color: #b0efff;
      margin-top: 10px;
      cursor: pointer;
    }
    input:disabled {
      background-color: #dadada;
      color: white;
    }
  }
  a {
    display: block;
    color: black;
    width: 387px;
    height: 40px;
    font-size: 14px;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 10px;
    background-color: #b0efff;
    margin-top: 13px;
    margin-left: 4px;
    line-height: 40px;
    cursor: pointer;
  }
`;
