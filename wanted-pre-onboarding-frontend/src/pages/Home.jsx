import React from 'react'
import {  Link } from 'react-router-dom';
import styled from 'styled-components';


export default function Home() {

  return (
    <HomeStyle>
    <div>
      Home
     <Link to='/signin'>로그인</Link>
    </div>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`

  a{
    color:white;
    border: 1px solid black;
    background-color:lightblue;
    text-decoration: none;
  }
` 