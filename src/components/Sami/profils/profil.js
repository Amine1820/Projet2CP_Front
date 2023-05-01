import {  useState } from "react";
import Afficherprofil from './Afficherprofil';
import axios from "axios";
import { useEffect } from "react";






const Profil = ({ role }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [rol, setRol] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/getuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setRol(data.rol);

        console.log(data)
        setprofils([{ nom: data.lastname, prenom: data.firstname, role: data.rol, departement: 'Ressources humaines', id: 1 }]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [profils, setprofils] = useState([]);

  return (
    <div className="profil">
      <Afficherprofil profils={profils} role={role} />
    </div>
  );
};

export default Profil;