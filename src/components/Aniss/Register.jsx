import './Register.css';
import img from '../../Front_assets/image_login.png'
import log from '../../Front_assets/LOGO.png'
import { GiPerson } from 'react-icons/gi';
import {HiIdentification} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { RiKeyLine } from 'react-icons/ri';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Register(){
  const [age, setAge] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if(isNaN(value)) {
      alert("Veuillez entrer un nombre entre 1 et 58");
      return;
    }
    if (value === "" || (value >= 1 && value <= 58)) {
      setAge(value);
    }
  };
  const GenderInput = () => {
    const [gender, setGender] = useState('');
  
    const handleChange = (event) => {
      const value = event.target.value.toLowerCase();
      if (value === 'homme' || value === 'femme') {
        setGender(value);
      }
    };}
    let navigate = useNavigate();
    const [error,setError] = useState("")
    
    const formik = useFormik({
      initialValues : {
            nom : "" ,
            prenom : "" ,
            sexe : "" ,
            telephone : "" ,
            adresse : "" ,
            wilaya : "" , 
            motivation : "" , 
            email : "" ,
            mot_de_passe : "" ,
            departement : "" ,
      },
      onSubmit : async ( values ) => {
        setError("")
      
        
        try {
          const response = await axios.post(
            "http://localhost:4000/createUser",
            values
          );
        navigate("/")
         }
         
          catch (err) {
        
            if (err.response.status === 404) {
              console.log("RERERE");
              alert("Email does  exist!");
            }
          
        }
      }
    });
       
return(

  
<>
<a href="/" class="absolute top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4">
  <img src={log} alt="" classNa="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12"/>
</a>
<div className='relative'>
      </div>
      <span className='text-white font-normal font-poppins text-base w-240 h-24 absolute top-8 right-44 flex-none order-0 flex-grow-0 ml-7'>Déja un membre?</span>
      <div className="fixed top-2 right-0 m-4">
      <button href="/login" className="bg-transparent   rounded-xl border border-solid border-white-300 whitespace-no-wrap text-yellow-300 font-medium px-4 py-2">
        
  Se Connecter
</button>
</div>
<form onSubmit={formik.handleSubmit}>
<div className="bg-blue-400 h-screen flex justify-center items-center">
  <img src={img} alt="" className="h-screen w-full object-cover"/>
  <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
    <h2 className="text-center text-yellow-300 text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">Rejoignez-Nous</h2>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mr-2"
        type="text"
        placeholder=""
        id="nom"
        required
        value={formik.values.nom}
        onChange={formik.handleChange}
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
      Nom
      </span>
      <input
        className="w-5/12 h-8 bg-transparent  border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2 "
        type="number"
        min={1}
        max={58}
        value={age}
        onChange={handleInputChange}
        placeholder=""
        id="wilaya"
        required
     //   value={formik.values.wilaya}
      />
      <span className="Wilaya  absolute bottom-3 right-[32%] text-gray-400 text-sm duration-500 pointer-events-none">
        Wilaya
      </span>
    </div>


    <div className="relative w-full mb-4 flex justify-between items-center ">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="prenom"
        required
        value={formik.values.prenom}
        onChange={formik.handleChange}
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Prenom
      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
        type="text"
        placeholder=""
        id="motivation"
        required
        value={formik.values.motivation}
        onChange={formik.handleChange}
      />
      <span className="Wilaya  absolute bottom-3 right-[28.5%] text-gray-400  text-sm duration-500 pointer-events-none">
        Motivation
      </span>
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="sexe"
        value={formik.values.sexe}
        onChange={formik.handleChange}
        required
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Sexe
        <GiPerson className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
        type="text"
        placeholder=""
        id="email"
        required
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <span className="Wilaya  absolute bottom-3 right-[33%] text-gray-400 text-sm duration-500 pointer-events-none">
        Email
        <AiOutlineMail className="absolute right-11 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
      </span>
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="adresse"
        required
        value={formik.values.adresse}
        onChange={formik.handleChange}
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Adresse
        <HiIdentification className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
        type="password"
        placeholder=""
        id="password"
        values={formik.values.mot_de_passe}
        onChange={formik.handleChange}
        required
      />
      <span className="Wilaya  absolute bottom-3 right-[26%] text-gray-400 text-sm duration-500 pointer-events-none">
        Mot de Passe
        <RiKeyLine className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </span>
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center ">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="telephone"
        required
        values={formik.values.telephone}
        onChange={formik.handleChange}
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Telephone
        <BsFillTelephoneFill className="absolute right-[4.5rem] top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </span>
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
        type="text"
        placeholder=""
        id="departement"
        required
        value={formik.values.departement}
        onChange={formik.handleChange}
      />
      <span className="Wilaya  absolute bottom-3 right-[26%] text-gray-400 text-sm duration-500 pointer-events-none">
        Departement
      </span>
    </div>
    <div class="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
      <button className="flex justify-center items-center bg-blue-500 rounded-xl shadow-md py-4 px-8 text-yellow-300 text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14">
      Créer compte 
      </button>
    </div>
  </div>

</div>







</form>
</>
)
}

export default Register;