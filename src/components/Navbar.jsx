import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="">
      <nav className="shadow-lg p-5 px-7 bg-bluefonce font-bold text-white">
        <div className="flex justify-between">
          <img src="Layer_1-2.png" alt="logo" />
          <div>
            <ul className="items-center flex text-sm font-thin space-x-5 justify-between">
              <li className="hover:underline hover:cursor-pointer">
                <Link to="/">A propos</Link>
              </li>
              <li className="hover:underline hover:cursor-pointer">
                <Link to="/donate">Evenements</Link>
              </li>
              <li className="hover:underline hover:cursor-pointer">
                <Link to="/donate">Nos Besoins</Link>
              </li>
              <li className="hover:underline hover:cursor-pointer">
                <Link to="/donate">Contactez nous</Link>
              </li>
            </ul>
          </div>
          <div class = "space-x-5">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="active:border-0 border-primary border-2  rounded-2xl bg-bluefonce px-4 py-3 border-b-2 hover:bg-white hover:text-black transition duration-200 ease-in-out"
            >
              Log in
            </button>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="rounded-2xl bg-rouge text-primary px-4 py-3  hover:bg-red-800 transition duration-200 ease-in-out"
            >
              Rejoignez Nous
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
