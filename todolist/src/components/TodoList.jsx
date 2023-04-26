import React, { useState } from 'react'

export default function TodoList(props) {
  
  const li = document.getElementsByClassName("list");
  const id = props.id;
  const [status,setStatus] = useState(false);
  const [text,setText] = useState(props.text);
  const [rtext,setRtext] = useState(props.text);
  const removeList = ()=> {   
    
    for(let i = 0; i<li.length;i++){
      if(li[i].id == id){
        li[i].remove();
      }
    }
  }
  const updateList = ()=>{
      setStatus(false); 
  }
  const updateCancle = ()=>{
    setText(rtext);
    setStatus(false);
}
  return (
      <>
        <li className='list' key={props.id} id={props.id}>
          {text}
          {status ? (
          <>
          <input 
            type='text'
            value={text}
            onClick={()=>setRtext(text)}
            onChange={({target})=> setText(target.value)}
            />
            <button className='success' onClick={()=>updateList()}></button>
            <button className='fail' onClick={updateCancle}></button>
            </>):(
          <>
            <button className='update' onClick={()=>setStatus(true)}></button>
          </>
          )}
          <button className='delete' onClick={removeList}></button>
        </li>
        
      </>
  )
}
