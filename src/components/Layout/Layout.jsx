import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { useEffect, useState } from "react";

const Layout = () => {
  const [currentLocation, setCurrentLocation] = useState('');

  const location = useLocation();
  
  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [currentLocation]);

  return (
    <>
      <header>
        { currentLocation == '/login' || currentLocation == '/register' ? 
          null : <Navbar />}
      </header>
      <Outlet />
    </>
  )
}

export default Layout
