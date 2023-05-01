import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../Footer';
import HP1user from '../Homes/HP1user';
import Apropos from '../Apropos';
import Home2 from '../Homes/Home2';
import Home3 from '../Homes/Home3';
import Login from "../../Aniss/Login"
import { AuthProvider } from 'react-auth-kit';
import Forget from '../../Aniss/Forget'
import Register from "../../Aniss/Register"
import Choice from "../../Aniss/Choice"
import AjouterBesoin from "../../Aniss/AjouterBesoin"
import Navbar from '../Navbars/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
          <Route exact path="/" element={<><HP1user /><Navbar /></>} />
            <Route exact path="/Blogs" element={<><Home3 /> <Navbar /></>} />
            <Route exact path="/Apropos" element={<><Apropos /> <Navbar /></>} />
            <Route exact path="/choice" element={<Choice />} />
            <Route exact path="/ajouterbesoin" element={<><AjouterBesoin /> </>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forget" element={<Forget />} />
            <Route exact path="/register" element={<Register />} />
         
      
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
