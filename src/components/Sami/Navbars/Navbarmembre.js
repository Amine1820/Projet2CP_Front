import Logo from '../images1/LOGO.png';
import Image1 from '../images1/Chamel.png';
import { Link } from 'react-router-dom';
const Navbarmembre = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 99999,
      left: 99999,
      behavior: "smooth",
    });};
    return (  
    <nav style={{backgroundColor:'#2E3840'}} className="Navbar z-10 fixed top-0 left-0 right-0  text-white flex items-center justify-between h-20 py-3 px-12">
    <div className="flex items-center justify-start">
    <Link to="/"><img
      src={Logo}
      height="90%"
      weight="90%"
      alt="Logo de la Fondation Coeur Espoir"
      className="h-8 mr-2"
    /></Link>
    </div>
      <div className="  flex flex-row gap-4 justify-center font-ubuntu text-[17px] hidden md:flex" id="menu">
        <p className="mr-6">
        <Link to="/Apropos" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600">A propos</Link>
        </p>
        <p className="mr-6">
        <Link to="/Evenements" className="text-white hover:text-gray-300 active:text-red-600 focus:text-red-600">Evenements</Link>
        </p>
        <p className="mr-6">
        <Link to="/Besoins" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600">Nos besoins</Link>
        </p>
        <p className="mr-6">
        <Link to="/Blogs" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600">Blogs</Link>
        </p>
        <p className="mr-6">
        <a href="#" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600" onClick={scrollToBottom}>Contactez nous</a>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <a href = "/ajouterbesoin">
          <button    className="bg-white text-black  rounded-2xl px-6 hover:bg-black hover:text-white mt-1 py-3  mr-3 transition duration-500 ease-in-out">
          Ajouter un besoin
          </button>
        </a>
        <div  onClick={()=>{const profila = document.querySelector('#profila');
      if (profila.classList.contains('hidden')){
      profila.classList.remove('hidden');
    }else{
      profila.classList.add('hidden');
    }}} className="px-2 ml-8 cursor-pointer" id="profilem">
            <img  className=" rounded-full" src={Image1} alt="dalil mahboul" width="64px"/>
          </div>
      </div>
      <div onClick={()=>{const menu2 = document.querySelector('#menu2');
      if (menu2.classList.contains('hidden')){
      menu2.classList.remove('hidden');
    }else{
      menu2.classList.add('hidden');
    }}} className="px-4 cursor-pointer flex flex-row gap-1 justify-between  md:hidden " id="burger">
        <svg className="w-8 bg-red-300 rounded-xl ml-0 hover:shadow hover:bg-black transition duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg> 
      </div>
      <div style={{backgroundColor: '#F9DBBB' }} className="z-12  hidden font-bold fixed opacity-80 ml-[60%] lg:ml-[84%] sm:ml-[59%] md:ml-[74%] w-40 rounded-xl mt-40 flex justify-center px-1 py-4" id="profila">
    <ul className="space-y-3" >
        <li className="mr-6">
            <Link to="/Profil" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');
    }} className=" text-black hover:text-gray-300 underline underline-offset-8 opacity-90">Afficher profil</Link>
        </li>
        <li className="mr-6">
            <Link to="#" onClick={()=>{const profila = document.querySelector('#profila');
      profila.classList.add('hidden');
    }} className=" text-black hover:text-gray-300 underline underline-offset-8 opacity-90">Modifier profil</Link>
        </li>
    </ul>
  </div>
      <div style={{backgroundColor: '#2E3840'}}  className="z-10 fixed left-0 right-0 float-center  mt-32 justify-center flex md:hidden hidden p-4" id="menu2">
    <p className="mr-6">
    <Link to="/Apropos" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600">A propos</Link>
    </p>
    <p className="mr-6">
    <Link to="/Evenements" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600">Evenements</Link>
    </p>
    <p className="mr-6">
    <Link to="/Besoins" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600">Nos besoins</Link>
    </p>
    <p className="mr-6">
    <Link to="/Blogs" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600">Blogs</Link>
    </p>
    <p className="mr-6">
    <a href="#" className=" text-white hover:text-gray-300 active:text-red-600 focus:text-red-600" onClick={scrollToBottom}>Contactez nous</a>
    </p>
  </div>
  </nav>
    );
}
 
export default Navbarmembre;