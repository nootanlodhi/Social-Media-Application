import { Navigate, Outlet } from 'react-router-dom'
import Topbar from '../Navbar/Topbar'

const PrivateRoute = () => {

    const userData = localStorage.getItem("userItem")
  return (
    userData ? <><Topbar/><Outlet/></> : <Navigate to="/login"/>
  )
}

export default PrivateRoute