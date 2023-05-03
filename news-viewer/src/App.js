// import axios from 'axios';
import { useState } from 'react';
import NewsList from './components/NewsList';

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

  return <NewsList/>

};



export default App;