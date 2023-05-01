import React, {useState, useEffect} from 'react'
import Appadmin from './Appadmin'
import App from './App'
import Appmembre from './Appmembre'
import '../index.css'
import axios from 'axios'
import Navbarvisitor from '../Navbars/Navbar';
import Navbaradmin from '../Navbars/Navbaradmin';
import Navbarmembre from '../Navbars/Navbarmembre';
import { AuthProvider } from 'react-auth-kit';
import Footer from '../Footer';
import HP1user from '../Homes/HP1user';
import Apropos from '../Apropos';
import Home2 from '../Homes/Home2';
import Home from '../Homes/Home';
import Home3 from '../Homes/Home3';
import Login from "../../Aniss/Login"
import Forget from "../../Aniss/Forget"
import Register from "../../Aniss/Register"
import Choice from '../../Aniss/Choice'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';



function Appglobale() {
    const [role, setRole] = useState()

    useEffect(() => {
        axios.get('http://localhost:4000/getrole')
            .then(response => {
                var role = response.data.userrole
                setRole(role)
                console.log(role)
            })
            .catch(error => console.log(error.response.data)) 
    }, [])
    function Navbar({ role }) {
        switch (role) {
          case 'BASIC':
            return <Navbarmembre />;
          case 'ADMIN':
            return <Navbaradmin />;
          default:
            return <Navbarvisitor />;
        }
      }
    
       const publicRoutes = [
        { path: '/login', element: <Login /> },
        { path: '/forget', element: <Forget /> },
         {path : '/register' , element : <Register />},
         {path : '/choice' , element : <Choice /> },
      ];
    
      const privateRoutes = [
        { path: '/', element: <HP1user /> },
        { path: '/Blogs', element: <Home3 /> },
        { path: '/Apropos', element: <Apropos /> },
        { path: '/Evenements', element: <Home /> },
        { path: '/Besoins', element: <Home2 /> },
        { path: '/Donation' }
      ];
    
      return (
    
        <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
              <Route
                path="/*"
                element={
                  <>
                    <Navbar role={role} />
                    <div className="content mt-12">
                      <Routes>
                        {privateRoutes.map((route) => (
                          <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                      </Routes>
                    </div>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
       </AuthProvider>
    
      );
    }
    

export default Appglobale