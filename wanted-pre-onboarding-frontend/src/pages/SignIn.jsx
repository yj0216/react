import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { redirect } from 'react-router-dom';
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

  useEffect(() => {
    if (checkUser.emailCheck && checkUser.passwordCheck) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [checkUser.emailCheck, checkUser.passwordCheck]);

  const emailConfirm = (e) => {
    if (regurl.test(e)) {
      console.log(e);
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
    console.log(e.length);
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
      .post('https://www.pre-onboarding-selection-task.shop/auth/signin', user)
      .then((response) => {
        console.log('성공 적인 로그인', response);
        localStorage.setItem('access_token', response.data.access_token);
        redirect('/todo')
      })
      .catch((err) => {
        console.log('error!:', err);
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
            <input type="button" value="회원가입" />
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
  height: 98vh;
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
    margin-top: 300px;
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
`;
