import {ReactComponent as Facebook} from './images1/Facebook.svg';
import {ReactComponent as Instagram} from './images1/instagram.svg';
import {ReactComponent as Twitter} from './images1/twitter.svg';
import {ReactComponent as Linkedin} from './images1/linkedin.svg';
const Footer = () => {
    return ( 
        <footer style={{backgroundColor: '#f9dbbb' , color: '#2E3840'}} className=" py-4 px-1 sm:px-1 md:px-3" >
        <div className="flex flex-row justify-between ">
        <div className="ml-1 md:ml-6 mt-12">
          <p className="mb-6 font-popins">Follow us</p>
          <div className="flex items-center mb-2">
            <a href="#" className=" hover:text-gray-300 mr-2 md:mr-6 px-1 lg:px-3">
            <Instagram className="w-6 h-6 md:w-12 md:h-12"/>
              <span className="ml-2"></span>
            </a>
            <a href="#" className=" hover:text-gray-300 mr-2 md:mr-6 px-1 lg:px-3">
                <Facebook className="w-6 h-6 md:w-12 md:h-12"/>
              <span className="ml-2"></span>
            </a>
            <a href="#" className=" hover:text-gray-300 mr-2 md:mr-6px-1 lg:px-3">
            <Twitter className="w-6 h-6 md:w-12 md:h-12"/>
              <span className="ml-2"></span>
            </a>
            <a href="#" className=" hover:text-gray-300 mr-2 md:mr-6 px-1 lg:px-3">
            <Linkedin className="w-6 h-6 md:w-12 md:h-12"/>
              <span className="ml-2"></span>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center  ">
          <a href="/Profil"><p className="px-4 md:px-16 py-1 hover:text-gray-300">Account</p></a>
          <a ><p className="px-4 md:px-16 py-1 hover:text-gray-300">Sign in</p></a>
          <a ><p className="px-4 md:px-16 py-1 hover:text-gray-300">Join Us</p></a>
          <a href="/choice"><p className="px-4 md:px-16 py-1 hover:text-gray-300">Donate</p></a>
        </div>
        <div className="flex flex-col justify-center  ">
          <a><p className="px-4 md:px-16 py-1 hover:text-gray-300">Our Space</p></a>
          <a href="/Apropos"><p className="px-4 md:px-16 py-1 hover:text-gray-300">About Us</p></a>
          <a><p className="px-4 md:px-16 py-1 hover:text-gray-300">Need Help ?</p></a>
          <a><p className="px-4 md:px-16 py-1 hover:text-gray-300">Collaboration</p></a>
        </div>
        <div className="flex flex-col justify-center  ">
          <a><p className="px-4 md:px-16 py-1 hover:text-gray-300">Updates</p></a>
          <a><p className="px-4 md:px-16 py-1 hover:text-gray-300">Newsletter</p></a>
          <a><p className="px-4 md:px-16 py-1 hover:text-gray-300">Blogs</p></a>
          <a><p className="px-4 md:px-16 py-1 hover:text-gray-300">Forrum</p></a>
        </div>
        </div>
          <p className="text-sm text-center  py-1 mt-6 text-xs">
              "Copyright &copy; 2023 Fondation
              Coeur Espoir , All rights reserved"
          </p>
      </footer>
     );
}
 
export default Footer;