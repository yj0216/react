// import axios from 'axios';
// import { useState } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
// import { useCallback } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try{
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e52bcbf4d20541bfb2b3a761939188f4'
  //     );
  //     setData(response.data);
  //   }catch (e){
  //     console.log(e);
  // }
    // axios
    //   .get('http://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => {
    //     setData(response.data);
    //   });
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );

// const [category,setCategory] = useState('all');
// const onSelect = useCallback(category => setCategory(category),[]);
  return (
  <Font>
    <Routes>
      <Route path="/:category?" element={<NewsPage />}/>
    </Routes>
  </Font>  
  );
};

const Font = styled.div`
   font-family:'default';
`


export default App;