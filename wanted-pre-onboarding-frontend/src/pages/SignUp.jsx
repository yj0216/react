import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();
  const regurl = /@/;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [checkUser, setCheckUser] = useState({
    confirmEmail: '',
    confirmPassword: '',
    emailCheck: false,
    passwordCheck: false,
    confirmEmailCheck: false,
    confirmPasswordCheck: false,
    clickEmailCheck:false,
    clickEmailCheck2:false,
    clickPasswordCheck:false,
    clickPasswordCheck2:false
  });

  useEffect(() => {
    if (
      checkUser.emailCheck &&
      checkUser.passwordCheck & checkUser.confirmEmailCheck &&
      checkUser.confirmPasswordCheck
    ) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [
    checkUser.emailCheck,
    checkUser.passwordCheck,
    checkUser.confirmEmailCheck,
    checkUser.confirmPasswordCheck,
  ]);

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

  const emailConfirm2 = (e) => {
    if (user.email === e) {
      setCheckUser({
        ...checkUser,
        confirmEmailCheck: true,
      });
    } else {
      setCheckUser({
        ...checkUser,
        confirmEmailCheck: false,
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
  const passwordConfirm2 = (e) => {
    if (user.password === e) {
      setCheckUser({
        ...checkUser,
        confirmPasswordCheck: true,
      });
    } else {
      setCheckUser({
        ...checkUser,
        confirmPasswordCheck: false,
      });
    }
  };
  const regSuccess = async () => {
    const loginCheck = await axios
      .post(`${process.env.REACT_APP_BACK_URL}/auth/signup`, user)
      .then((response) => {
        console.log('성공 적인 회원가입', response);
        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
      })
      .catch((err) => {
        console.log('error!:', err);
        alert('오류가 발생했습니다.');
      });

    return loginCheck;
  };

  return (
    <LoginStyle>
      <div className="login-form">
        <h1>회원가입</h1>
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
                onClick={() => {
                  if (checkUser.clickEmailCheck === false) {
                    setCheckUser({ ...checkUser, clickEmailCheck: true });
                  }
                }
              }
              />
              {checkUser.clickEmailCheck && !checkUser.emailCheck && (
                <div className="errorMessage">
                  이메일을 제대로 입력해주세요.
                </div>
              )}
              <input
                type="text"
                className="input-check"
                placeholder="이메일 확인"     
                onChange={(e) => {
                  setCheckUser({ ...checkUser, confirmEmail: e.target.value });
                  emailConfirm2(e.target.value);
                }}
                onClick={() => {
                  if (checkUser.clickEmailCheck2 === false) {
                    setCheckUser({ ...checkUser, clickEmailCheck2: true });
                  }
                }
                }
              />
              {checkUser.clickEmailCheck2 && !checkUser.confirmEmailCheck && (
                <div className="errorMessage">이메일이 일치하지 않습니다.</div>
              )}
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
                onClick={() => {
                  if (checkUser.clickPasswordCheck === false) {
                    setCheckUser({ ...checkUser, clickPasswordCheck: true});
                  }
                }
              }
              />
              {checkUser.clickPasswordCheck && !checkUser.passwordCheck && (
                <div className="errorMessage">8자리 이상 입력해주세요</div>
              )}
              <input
                type="password"
                className="input-check"
                placeholder="비밀번호 확인"
                onChange={(e) => {
                  setCheckUser({
                    ...checkUser,
                    confirmPassword: e.target.value,
                  });
                  passwordConfirm2(e.target.value);
                }}
                onClick={() => {
                  if (checkUser.clickPasswordCheck2 === false) {
                    setCheckUser({ ...checkUser, clickPasswordCheck2: true });
                  }
                }
              }
              />
              {checkUser.clickPasswordCheck2 && !checkUser.confirmPasswordCheck && (
                <div className="errorMessage">
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>
          </div>

          <div className="login-form-button">
            <input
              type="button"
              data-testid="signup-button"
              disabled={notAllow}
              value="회원가입"
              onClick={regSuccess}
            />
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
  max-height: 98vh;
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
  .input-check {
    margin-top: 5px;
  }
  .errorMessage {
    color: red;
    font-size: 10px;
    padding: 0px;
    text-align: start;
  }
  .successMessage {
    color: lightgreen;
    font-size: 10px;
    padding: 0px;
    text-align: start;
  }
`;
