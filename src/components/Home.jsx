import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="h-screen bg-white flex justify-between">
        <div className="w- px-10 py-10  font-semibold flex-col">
          <ul>
            <li>
              <p className="text-5xl  w-[30rem] text-left">
                Un Peu De Votre Coeur Peut Sauver Une Vie.
              </p>
            </li>
            <li>
              <button className="bg-rouge p-5 text-white rounded-2xl">
                Faites Une Donation
              </button>
            </li>
          </ul>
        </div>
        <div className="w- px-10 py-10  font-semibold flex-col">
          <ul>
            <li>
              <p className="text-5xl  w-[30rem] text-left">
                Un Peu De Votre Coeur Peut Sauver Une Vie.
              </p>
            </li>
            <li>
              <button className="bg-rouge p-5 text-white rounded-2xl">
                Faites Une Donation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
