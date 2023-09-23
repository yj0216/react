import { isLoginSelector } from "../recoil/TokenAtom";
import { useRecoilValue } from 'recoil';
import { Outlet, Navigate, useLocation } from 'react-router'

const ProtectedRoute = () => {
    const isLogin = useRecoilValue(isLoginSelector)
    const currentLocation = useLocation();
    // if(isLogin){
    //   return <Outlet/>
    // } else {
    //   navigate('/login')
    // }
    return isLogin ? (
        <Outlet />
    ) :
        <Navigate
            to={`/login`}
            replace 
            state={{ redirectedFrom: currentLocation }}
        />
}

export default ProtectedRoute;