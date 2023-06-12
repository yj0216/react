import {  createBrowserRouter,RouterProvider, redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';

const signLoader = () => {
  const token = localStorage.getItem('access_token');
  if (token) {
    return redirect('/todos');
  }
  return null;
};

const todoLoader = async () => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    return redirect('/signin');
  }
  
  const data = await axios
    .get(`${process.env.REACT_APP_BACK_URL}/todos`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      if (data.statusCode === 401) {
        throw new Error(data.message);
      } else {
        return data;
      }
    })
    .catch((error) => {
      console.log('에러!!!:', error);
    });

    return data;
};
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/signin', loader: signLoader, element: <SignIn /> },
  { path: '/signup', loader: signLoader, element: <SignUp /> },
  { path: '/todos', loader: todoLoader, element: <Todo /> },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
