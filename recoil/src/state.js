import React from 'react'
import { atom } from 'recoil'

export const contentState = atom ({
  key: 'content',
  default:{
    name:'test',
    status:false,
    message:''
  }
  /*
    get: -
    set: -
    위 코드를 통해 가공한 데이터 값을 사용할 수 있다  
  */ 
})
