import { useState } from "react";
import "./App.css";

import img from "./assets/left-img.jpg";

function App() {
  return (
    <>
      <div className="layer-1 flex justify-center">
        <div className="layer-2 bg-white m-20 rounded-4xl flex w-[70%]">
          <div className="layer-3 w-[50%]">
            <img src={img} className="h-130 p-15" alt="" />
          </div>
          <div className="layer-3 w-[50%] p-7 flex justify-center">
            <div className="flex flex-col">
              <p className="text-3xl font-bold flex justify-center heading">
                Find your perfect match
              </p>
              <div className="flex flex-col space-y-10 p-10">
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-15 w-90 placeholder:text-black
                  placeholder:text-lg placeholder:px-5
                  rounded-md"
                  placeholder="Profile created for"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="h-15 w-90
                  placeholder:text-black
                  placeholder:text-lg placeholder:px-5
                  rounded-md"
                  placeholder="Enter the name"
                />
                <div className="flex justify-between w-90">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="h-15 w-20
                  placeholder:text-black
                  placeholder:text-lg placeholder:px-3
                  rounded-md"
                    placeholder="+91"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="h-15 w-60
                  placeholder:text-black
                  placeholder:text-lg placeholder:px-5
                  rounded-md"
                    placeholder="Enter the number"
                  />
                </div>
                <button
                  type="button"
                  className="button text-white text-2xl p-3 rounded-full"
                >
                  Register free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
