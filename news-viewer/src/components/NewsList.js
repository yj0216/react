import React,{ useState,useEffect} from 'react'
import NewsItem from './NewsItem';
import styled from 'styled-components';
import axios from 'axios';
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

const NewsList = () => {
    const [articles,setArticles] = useState(null);
    const [loading,setLoading] = useState(false);
    
    useEffect( () => {  
        const fetchData = async () => {
        setLoading(true);
        try{
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e52bcbf4d20541bfb2b3a761939188f4'
            );
            setArticles(response.data.articles);
        } catch(e){
            console.log(e);
        }
        setLoading(false);
    }
    fetchData();
    },[]);
    if(loading) {
        return <NewsListBlock>대기중...</NewsListBlock>
    }
    if(!articles){
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

const NewsListBlock = styled.div`
    font-family:'default';
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