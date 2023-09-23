import { useRecoilState,RecoilRoot} from 'recoil';
import { useState,useEffect} from 'react';
// import { contentState } from './state';
import Login from './pages/Login'
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './Routes/ProtectedRoute'
import Mypage from './pages/Mypage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/* <Sample /> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoute />}>
          <Route path="/mypage" element={<Mypage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// function Sample() {
//   const [reqContent, setReqContent] = useState({
//     name: 'sample',
//     status: true,
//     message: '테스트 메세지'
//   });
//   // contentState = selector key값
//   const [content, setContent] = useRecoilState(contentState);
//   //const content = useRecoilValue(contentState); 
//   //const setContent = useRecoilState(contentState);
//   //const resetContent = useResetRecoilState(contentState);
//   useEffect(() => {
//     setContent(reqContent);
//   }, [])

//   const status = `${content.status}`;
//   return (
//       <div>
//         {content.name},
//         {status},
//         {content.message}
//       </div>
//       )
// }

export default App;
