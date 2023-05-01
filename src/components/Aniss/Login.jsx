import './Login.css';
import img from '../../Front_assets/image_login.png'
import log from '../../Front_assets/LOGO.png'
import { AiOutlineMail } from 'react-icons/ai';
import { RiKeyLine } from 'react-icons/ri';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import axios from 'axios' ; 
import { useSignIn } from 'react-auth-kit' ;
import { useFormik } from 'formik'

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setError("");
      try {
        const response = await axios.post(
          "http://localhost:4000/login",
          values
        );

        
        signIn({
          token: response.data.accessToken,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: values.email ,userrole : response.data.userrole },
        });
        window.location.href = '/Apropos';

      } catch (err) {
        if (err.response.status === 404) {
          console.log("RERERE");
          alert("Email does not exist!");

        } else {
          alert("Wrong password check again...");
        }
      }
    },
  });

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
    <a href="/" class="absolute top-0 left-0 mt-4 ml-4">
  <img src={log} alt="" class="h-12  sm:h-12 md:h-12 lg:h-12 xl:h-12"/>
</a>

    <div class="bg-blue-400 h-screen flex justify-center items-center ">
  <img src={img} alt="" class="h-screen w-full object-cover  "/>
    <div className='relative'>
      <div className='absolute bottom-[-0.625rem] left-[2.1622%] top-[-1.25rem] h-[9.375rem] w-[92.5%] border-b border-yellow-200 sm:w-[80%] md:w-[90%]' ></div>
      </div>
      <span className='text-white font-normal font-poppins text-base w-240 h-24 absolute top-8 right-52 flex-none order-0 flex-grow-0 ml-8'>Vous n'êtes pas un membre?</span>
      <div className="fixed top-2 right-0 m-4">
      <button href='/register'className="bg-transparent  rounded-xl border border-solid border-white-300 whitespace-no-wrap text-yellow-300 font-medium px-4 py-2">
        
  Rejoignez-Nous
</button>
</div>
<div className="box-sizing border-box mx-auto flex flex-col justify-start items-center p-8 gap-4 text-red absolute w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 bg-red shadow-lg rounded-lg">
  <h2 className="text-center text-yellow-300 text-4xl font-bold">Se Connecter</h2>
  <form onSubmit={formik.handleSubmit}>
  <div className="flex flex-col gap-4 w-full">
    <div className="relative">
      <input
        className="w-full h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mt-11"
        type="email"
        placeholder=""
        id="email"
        required
        value={formik.values.email} onChange={formik.handleChange}
      />
      <span className="Email absolute bottom-3 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Email
        <AiOutlineMail className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      </span>
    </div>
    <div className="relative">
      <input
        className="w-full h-8 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:text-black mt-24"
        placeholder=""
        id="password"
        type={showPassword ? 'text' : 'password'}
        required
        value={formik.values.password} onChange={formik.handleChange}
      />
      <span className="Email absolute bottom-4 left-7 text-gray-400 text-sm duration-500 pointer-events-none">
        Mot de passe
        <RiKeyLine className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      </span>
      <button
        className="absolute top-20 right-5 p-2"
        onClick={handleShowPassword}
      >
        {showPassword ? (
          <FaEyeSlash className="h-6 w-6 text-gray-500" />
        ) : (
          <FaEye className="h-6 w-6 text-gray-500" />
        )}
      </button>
    </div>
    <div class="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center p-4 md:p-8 gap-4 md:gap-8 w-full md:w-auto h-auto md:h-71 bg-gray-800 md:bg-transparent shadow-lg md:shadow-none rounded-lg md:rounded-none">
      <button className="flex justify-center items-center bg-blue-500 rounded-xl shadow-md py-4 px-8 text-white text-xl font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full sm:w-80 h-14">
        Se connecter
      </button>
      <a href='/forget' className='text-white hover:text-yellow-300'><h4>Mot de passe oublié?</h4> </a>
    </div>
    </div>
    </form>
    </div>
    
</div>    
  </>
  );
}

export default Login;