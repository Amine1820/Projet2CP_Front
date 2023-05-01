import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../Footer';
import HP1user from '../Homes/HP1user';
import Apropos from '../Apropos';
import Navbarmembre from '../Navbars/Navbarmembre';
import Home2membre from '../Homes/Home2membre';
import Homemembre from '../Homes/Homemembre';
import Home3membre from '../Homes/Home3membre';
import Profil from '../profils/profil';
import Choice from '../../Aniss/Choice';
import AjouterBesoin from '../../Aniss/AjouterBesoin';


function Appmembre() {
  return (
    <Router>
    <div className="App">
      <Navbarmembre />
      <div className="content mt-12">
        <Routes>
        <Route exact path="/" element={<><HP1user /><Navbarmembre /></>} />
            <Route exact path="/Blogs" element={<><Home3membre /> <Navbarmembre /></>} />
            <Route exact path="/Apropos" element={<><Apropos /> <Navbarmembre /></>} />
            <Route exact path="/choice" element={<Choice />} />
            <Route exact path="/ajouterbesoin" element={<><AjouterBesoin /> </>} />
          <Route path="/Profil" element={<Profil role={"membre"} />} />
          <Route path="/Donation" />
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default Appmembre;