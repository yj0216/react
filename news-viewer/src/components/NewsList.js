import React from 'react'
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
import usePromise from '../lib/usePromise';
// const sampleArticle = {
//   title:'제목',
//   description:'내용',
//   url:'https://google.com',
//   urlToImage:'https://via.placehoslder.com/160',
// };

// const NewsList = () => {
//     return (
//         <NewsListBlock>
//             <NewsItem article={sampleArticle}/>
//             <NewsItem article={sampleArticle}/>
//             <NewsItem article={sampleArticle}/>
//             <NewsItem article={sampleArticle}/>
//             <NewsItem article={sampleArticle}/>
//             <NewsItem article={sampleArticle}/>
//         </NewsListBlock>
//     );
// };

const NewsList = ({category}) => {
    const [loading,response,error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e52bcbf4d20541bfb2b3a761939188f4`
        );
    },[category]);
    
    if(loading) {
        return <NewsListBlock>대기중...</NewsListBlock>
    }

    if(!response){
        return null;
    }

    if(error){
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

const NewsListBlock = styled.div`
    box-sizing:border-box;
    padding-bottom: 3rem;
    width:768px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (max-width: 768px){
        width:100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export default NewsList;