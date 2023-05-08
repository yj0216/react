import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useLocation } from 'react-router-dom';
const NewsPage = () => {
  const location = useLocation(); 
  console.log((location.pathname).replace('/',''));
  const category = (location.pathname).replace('/','') || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};
 
export default NewsPage;