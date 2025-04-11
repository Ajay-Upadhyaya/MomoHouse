import React from "react";
import HomeMenu from "../Home Components/HomeMenu";
import Homehero from "../Home Components/Homehero";
import HomeRecipes from "../Home Components/HomeRecipes";
import HomeSection4 from "../Home Components/HomeSection4";

function Home() {
  return (
    <div>
      <HomeMenu />
      <Homehero />
      <HomeRecipes />
      <HomeSection4 />
    </div>
  );
}

export default Home;
