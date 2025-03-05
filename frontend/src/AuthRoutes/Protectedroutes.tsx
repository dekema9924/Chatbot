import Cookies from'js-cookie'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'



export const ProtectedRoutes =()=>{
    const isAuth = Cookies.get('connect.sid')

        return isAuth ? <Outlet/> : <Navigate to={'/'}/>
}


export const LocalRoute =()=>{
    const isAuth = Cookies.get('connect.sid')

        return !isAuth ? <Outlet/> : <Navigate to={'/gemini'}/>
}