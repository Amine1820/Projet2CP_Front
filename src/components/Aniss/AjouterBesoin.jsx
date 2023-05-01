import './AjouterBesoin.css';
import img from '../../Front_assets/Ajouter Un besoin.png'
import log from '../../Front_assets/LOGO.png'
import { AiOutlineMail } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';
import {AiFillPicture} from 'react-icons/ai'
import { useState } from 'react';
import { GiPerson } from 'react-icons/gi';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
function AjouterBesoin() {

  let navigate = useNavigate();
  const [error,setError] = useState("")
  
console.log(122222222222222222)
  
  const formik = useFormik({
    initialValues : {
          destinataire : "" ,
          ccp : "" ,
          quantite : "",
          adresse : "" ,
          type : "",
    },
    
    onSubmit : async ( values ) => {
      setError("")
    
      try {
        const response = await axios.post(
          "http://localhost:4000/addBesoin",
          values
          
        );
        console.log(formik.values.ccp)
        window.location.href = "/"
       
       }
       
        catch (err) {
      
          if (err.response.status === 404) {
            console.log("RERERE");
            alert("L'adresse e-mail entrée n'existe pas !");
          }
        
      }
    }
  });

  return (

   
    <>
    <a href="/" class="absolute top-0 left-0 mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 ml-2 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4">
  <img src={log} alt="" classNa="h-8 sm:h-12 md:h-12 lg:h-12 xl:h-12"/>
</a>
<div className='relative'>
      </div>
  
<div className="bg-blue-400 h-screen flex justify-center items-center">
  <img src={img} alt="" className="h-screen w-full object-cover"/>
<div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 bg-red shadow-lg rounded-lg">
<form onSubmit={formik.handleSubmit}>  
    <h2 className="text-center text-yellow-300 text-4xl font-nohemi mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">Ajouter un besoin</h2>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mr-2"
        type="text"
        placeholder=""
        id="destinataire"
        required
        value = { formik.values.destinataire}
        onChange={formik.handleChange}
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
      Destinataire
      </span>
      <input
        className="w-5/12 h-8 bg-transparent  border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2 "
        type="text"
       
        placeholder=""
        id="ccp"
        required
        value ={ formik.values.ccp}
        onChange={formik.handleChange}
      />
      <span className="Wilaya  absolute bottom-3 right-[32%] text-gray-400 text-sm duration-500 pointer-events-none">
        CCP
        <AiOutlineMail className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />

      </span>
    </div>


    <div className="relative w-full mb-4 flex justify-between items-center ">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="adresse"
        required
        value = { formik.values.adresse}
        onChange = { formik.handleChange}
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Adresse
        <HiIdentification className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />

      </span>
      
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black ml-2"
        type="file"
        placeholder=""      
        id="wilaya"

  
      />
      <span className="Wilaya  absolute bottom-3 right-[19.5%] text-gray-400  text-sm duration-500 pointer-events-none">
        Ajouter une image
        <AiFillPicture className="absolute right-[7.5rem] top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />

      </span>
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="type"
        required
        value = { formik.values.type}
        onChange={formik.handleChange}
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Type
        <GiPerson className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />

      </span>
      
    </div>
    <div className="relative w-full mb-4 flex justify-between items-center">
      <input
        className="w-5/12 h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black"
        type="text"
        placeholder=""
        id="quantite"
        required
        value = { formik.values.quantite}
        onChange={formik.handleChange}
      />
      <span className="Wilaya absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
      Quantité
      </span>
     
    </div>
   
    <div class="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
      <button className="flex justify-center items-center bg-blue-500 rounded-xl shadow-md py-4 px-8 text-yellow-300 text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14">
      Ajouter 
      </button>
    </div>
    </form>
  </div>


</div>
  </>
  );
}

export default AjouterBesoin;