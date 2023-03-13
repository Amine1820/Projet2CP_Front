import React from "react";

const AboutUs = () => {
  return (
    <div class="bg-white flex justify-between px-32 py-16">
      <div>
        <img src="../Front_assets/About_Us.png"></img>
      </div>
      <div class="w-[30rem]">
        <h1 class="text-5xl tracking-wide">A Propos De Nous</h1>
        <p class="text-left font text-2xl p-5">
          Nous sommes une association caritative dont la mission est d'aider les
          personnes <span class="font-bold">les plus vulnérables</span> de la
          société.
          <br />
          Notre objectif est de <span class="font-bold">contribuer</span> à un
          monde plus juste et plus équitable en fournissant un soutien aux
          personnes qui en ont le plus besoin
        </p>
        <button class="bg-bluefonce rounded-2xl p-5 text-white font-semibold">
          Voir Plus
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
