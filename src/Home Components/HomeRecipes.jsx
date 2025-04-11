import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function HomeRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const getMenu = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    // console.log(response.recipes);
    setRecipes(response.recipes);
  };
  useEffect(() => {
    getMenu();
  });

  const filterMenu = (category) => {
    const filteredItems = recipes.filter((item) => {
      return item.cuisine === category;
    });
    setFilterRecipes(filteredItems);
  };
  return (
    <>
      <div className="mt-12">
        <div className="text-center space-y-2">
          <h1 className="lg:text-3xl text-xl font-bold ">
            Our <span className="text-[#D95103]">Most Popular</span> Recipes
          </h1>
          <p className="text-gray-400 lg:text-sm text-xs font-[inter]">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-5">
          <button
            onClick={() => filterMenu("Italian")}
            className="px-7 py-3 border-2 font-semibold text-base border-gray-300 rounded-3xl text-[#101828] cursor-pointer hover:bg-[#D95103] hover:text-white hover:border-none"
          >
            Italian{" "}
          </button>
          <button
            onClick={() => filterMenu("Pakistani")}
            className="px-7 py-3 font-semibold text-base border-2 border-gray-300 rounded-3xl text-[#101828] cursor-pointer hover:bg-[#D95103] hover:text-white hover:border-none"
          >
            Pakistani
          </button>
          <button
            onClick={() => filterMenu("Asian")}
            className="px-7 py-3 font-semibold text-base border-2 border-gray-300 rounded-3xl text-[#101828] cursor-pointer hover:bg-[#D95103] hover:text-white hover:border-none"
          >
            Asian
          </button>
        </div>

        <div className="mt-8 w-[80%] mx-auto">
          {filterRecipes.length > 0 ? (
            <div className=" gap-10 justify-center px-8 pt-12 pb-8 mt-10 flex flex-wrap">
              {filterRecipes.map((item) => {
                return (
                  <NavLink to={`/productdetails/${item.id}`} key={item.id}>
                    <div
                      key={item.id}
                      className=" flex flex-col items-center justify-center gap-3  hover:scale-105 ease-in-out duration-500  w-[250px] h-[320px] rounded-lg shadow-lg shadow-gray-300 cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt="Item's image"
                        className="w-[150px] mx-auto rounded-lg "
                      />
                      <h1>{item.name}</h1>
                      <p> Rs {item.caloriesPerServing}</p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          ) : (
            <div className=" gap-10 justify-center px-8 pt-12  pb-8 mt-10 flex flex-wrap">
              {recipes.map((item) => {
                return (
                  <NavLink to={`/productdetails/${item.id}`} key={item.id}>
                    <div
                      key={item.id}
                      className=" flex flex-col items-center justify-center gap-3  hover:scale-105 ease-in-out duration-500  w-[250px] h-[320px] rounded-lg shadow-lg shadow-gray-300 cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt="Item's image"
                        className="w-[150px] mx-auto rounded-lg "
                      />
                      <h1 className="font-bold text-[#010128] px-4">
                        {item.name}
                      </h1>
                      <h1 className="font-bold text-[#010128] px-4">
                        {item.cuisine}
                      </h1>
                      <p className="font-medium text-base text-[#010128]">
                        {" "}
                        Rs {item.caloriesPerServing}
                      </p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
        <NavLink to="/menu">
          <button className="bg-[#0C6967] text-white lg:text-base md:text-sm text-xs hover:bg-[#D95103] cursor-pointer py-4 px-8 my-5 flex items-center gap-2 rounded-4xl mx-auto ">
            {" "}
            Explore Our Menu <FaArrowRightLong size={20} />
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default HomeRecipes;
