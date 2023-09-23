import React from 'react'
import { useState } from 'react'
import  axios  from 'axios';
import { styled } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { TokenAtom, isLoginSelector} from '../recoil/TokenAtom';
import { useSetRecoilState,useRecoilValue } from 'recoil'
import { useEffect } from 'react';

const Login = () => {

    const [id,setId] = useState();
    const [password,setPassword] = useState();
    const setAccessToken = useSetRecoilState(TokenAtom)
    const navigate = useNavigate()

    const isLogin = useRecoilValue(isLoginSelector);

    const location = useLocation();

    const from = location?.state?.redirectedFrom?.pathname || "/";
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/user/login`,{id:id,pw:password}).
        then((res)=>{
            setAccessToken(res.data.accessToken)
            navigate(from)
        })
    }



  return (
    <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
        ID
        <input
            type='text'
            autoFocus
            placeholder='아이디'
            onChange={(e) => {setId(e.target.value)}}
        />
        </InputWrapper>
        <InputWrapper>
        Password
        <input
            type='password'
            placeholder='비밀번호'
            onChange={(e) => {setPassword(e.target.value)}}
        />
        </InputWrapper>
        <Button type='submit'>로그인</Button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #eee;
  align-items: center;
  gap: 16px;

`;
const Button = styled.button`
  padding: 16px;
  width: 30%;
  background-color: #00a5ba;
  color: #fff;
`;

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > input {
    padding: 8px 16px;
    border: 1px solid #eee;
  }
`;

export default Login;
