//import ProductPage from "./pages/ProductPage";
// import Movie from "./components/Movie";
// import { dummy } from "./movieDummy";
// import Counter from "./components/Counter";
// import List from "./components/list";
import { useState } from "react";
import TodoCard from "./components/TodoCard";



function App() {
  // // number  ...
  // const [num,setNum] = useState(0);
  
  // //string
  // const [name,setName] = useState('');

  // //boolean
  // const [isChecked, setIsChecked] = useState(false);
  return (
    // <div>
    //   <ProductPage/>
    // </div>
    // <div>
    //   <div className="app-container">
    //     {
    //       dummy.results.map((item)=>{
    //         return(
    //           <Movie
    //             title={item.title}
    //             poster_path={item.poster_path}
    //             vote_average={item.vote_average}
    //           />
    //         )
    //       })
    //     }
    //   </div>
    // </div>
    // <div>
    // <Counter/>
    // </div>
    // <div>
    //   <input
    //     type="number"
    //     value={num}
    //     onChange={(e)=>setNum(e.target.value)}
    //   />
    //   <input
    //     type='text'
    //     value={name}
    //     onChange={(e)=>setName(e.target.value)}
    //   />
    //   <div>
    //     <input
    //       type='checkbox'
    //       value={isChecked}
    //       onChange={(e)=>setIsChecked(e.target.checked)}
    //     />
    //     {isChecked ? <span>체크됨</span> : <span>체크안됨</span>}
    //   </div>
    // </div>
    // <div>
    //   <List/>
    // </div>
    <div>
      <TodoCard/>
    </div>
  );
}

export default App;
