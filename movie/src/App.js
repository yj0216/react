
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import { BrowserRouter } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="root-wrap">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie" element={<Movies/>}/>
      <Route path="/movie/:title" element={<MovieDetail/>}/>
      <Route path="/tv" element={<Tv/>}/>
      <Route path="/person" element={<Celebrity/>}/>
      <Route path="/*" element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
