import './Forget.css';
import img from '../../Front_assets/image_login.png'
import log from '../../Front_assets/LOGO.png'
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';


function Forget(){
  let navigate = useNavigate();
  const [error,setError] = useState("")
  
  const formik = useFormik({
    initialValues : {
          email : "" ,
    },
    
    onSubmit : async ( values ) => {
      setError("")
      

      
      try {
        const response = await axios.post(
          "http://localhost:4000/resetPass",
          values
        );
        window.location.href = "/login"
       
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
<a href="/" class="absolute top-0 left-0 mt-4 ml-4">
  <img src={log} alt="" class="h-12  sm:h-12 md:h-12 lg:h-12 xl:h-12"/>
</a>
<form onSubmit={formik.handleSubmit}>
<div class="bg-blue-400 h-screen flex justify-center items-center">
  <img src={img} alt="" class="h-screen w-full object-cover  "/>
 

  <div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-4 md:p-8 gap-4 text-red absolute w-11/12 sm:w-3/4 md:w-1/2   bg-red shadow-lg rounded-lg">

<h2 className="text-center text-yellow-300 text-4xl font-nohemi mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">Vous avez oublié votre mot de passe?</h2>

<h3 className="text-center text-white text-lg font-normal mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">Ne vous inquiétez pas, nous vous enverrons un courrier pour réinitialiser votre mot de passe.</h3>

<div className="flex flex-col gap-4 w-full">

  <div className="relative">
    <input
      className="w-full h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black xl:mt-2 "
      type="email"
      placeholder=""
      id="email"
      required
      value = { formik.values.email} onChange={formik.handleChange}
    />
    <span className="Email absolute top-1 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
      Email
      <AiOutlineMail className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
    </span>
  </div>

  <div class="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">

    <button className='flex justify-center mb-[5px] box-border items-center bg-blue-500 rounded-xl shadow-md py-4 px-8 text-yellow-300 text-xs font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 lg:w-auto h-14 sm:mt-4 lg:mt-0 xl:mt-10  '>Réinitialiser le mot de passe</button>

  </div>

</div>

</div>




</div>
</form>
</>
)
}
export default Forget;