import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const categories = [
//     {
//         name:'all',
//         text:'전체보기',
//     },
//     {
//         name:'business',
//         text:'비즈니스'
//     },
//     {
//         name:'entertainment',
//         text:'엔터테인먼트'
//     }
//     ,
//     {
//         name:'health',
//         text:'건강'
//     }
//     ,
//     {
//         name:'science',
//         text:'과학'
//     }
//     ,
//     {
//         name:'sport',
//         text:'스포츠'
//     }
//     ,
//     {
//         name:'technology',
//         text:'기술'
//     }
// ];

const Categories = () => {
  return (
    <CategoriesBlock>
      {/* {categories.map(c => (
              <Category 
              key={c.name}
              activeClassName="active"
              exact={c.name === 'all'}
              to={c.name === 'all' ? '/' : `${c.name}`}
              >
                {c.text}
                
              </Category>
          ))} */}
      <Category>
        <li>
          <Link to="/" activeClassName="active" style={{ textDecoration: 'none',color: 'black'}}>전체보기</Link>
        </li>
        <li>
          <Link to="/business" activeClassName="active" style={{ textDecoration: 'none',color: 'black'}}>비즈니스</Link>
        </li>
        <li>
          <Link to="/entertainment" activeClassName="active" style={{ textDecoration: 'none',color: 'black'}}>엔터테이먼트</Link>
        </li>
        <li>
          <Link to="/health" activeClassName="active" style={{ textDecoration: 'none',color: 'black'}}>건강</Link>
        </li>
        <li>
          <Link to="/science" activeClassName="active" style={{ textDecoration: 'none',color: 'black'}}>과학</Link>
        </li>
        <li>
          <Link to="/sport" activeClassName="active" style={{ textDecoration: 'none',color: 'black'}}>스포츠</Link>
        </li>
        <li>
          <Link to="/technology" activeClassName="active" style={{ textDecoration: 'none',color: 'black'}}>기술</Link>
        </li>
      </Category>
    </CategoriesBlock>
  );
};

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.ul`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding-bottom: 0.25rem;
  padding-left: 0;
  li:not(:first-of-type) {
    padding-left: 1rem;
  }
  li {
    white-space: pre;
    color: black;
    font-size: 1.125rem;
    list-style-type: none;
    text-decoration-line: none;
  }
  li &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

export default Categories;
