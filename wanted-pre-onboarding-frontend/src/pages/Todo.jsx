import React from 'react';
import styled from 'styled-components';

function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ('0' + (1 + date.getMonth())).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);

  return year + '.' + month + '.' + day;
}
export default function Todo() {
  return (
    <TodoStyle>
      <div>
        <h2>Today</h2>
        <span>{getToday()}</span>
        <div>
          <div>
            <span>가장 중요한 목표:</span>
            <input type="text" />
          </div>
          <div>
            <h3>계획</h3>
            <ul></ul>
          </div>
        </div>
      </div>
    </TodoStyle>
  );
}

const TodoStyle = styled.div``;
