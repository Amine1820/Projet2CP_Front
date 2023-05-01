import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import HP1user from '../Homes/HP1user';
import Apropos from '../Apropos';
import Navbaradmin from '../Navbars/Navbaradmin';
import Home2admin from '../Homes/Home2admin';
import Homeadmin from '../Homes/Homeadmin';
import Home3admin from '../Homes/Home3admin';
import Profil from '../profils/profil';
import AjouterBesoin  from '../../Aniss/AjouterBesoin';
import { AuthProvider } from 'react-auth-kit';
import Choice from "../../Aniss/Choice"
import EvenementsListadmin from '../Evenements/EvenementsListadmin';
import BesoinsListadmin from '../Besoins/BesoinsListadmin';
import Logout from "../../Aniss/Logout"


function Appadmin() {
  const publicPaths = ['/choice','/ajouterbesoin'];

  return (
    <AuthProvider>  
      <Router>
        <div className="App">
          {publicPaths.includes(window.location.pathname) ? null : <Navbaradmin />}
         
            <Routes>
            <Route exact path="/" element={<><HP1user /><Navbaradmin /></>} />
            <Route exact path="/Blogs" element={<><Home3admin /> <Navbaradmin /></>} />
            <Route exact path="/Apropos" element={<><Apropos /> <Navbaradmin /></>} />
            <Route exact path="/choice" element={<Choice />} />
            <Route exact path="/ajouterbesoin" element={<><AjouterBesoin /> </>} />
              <Route path="/Profil" element={<Profil role ={'Admin'}  />} />
              <Route path="/Donation" />
              <Route exact path = "/logout" element = {<Logout/>} />
            </Routes>
          </div>
          <Footer />
   
      </Router>
    </AuthProvider>
  );
}

export default Appadmin;