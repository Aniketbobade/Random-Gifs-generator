
import React from "react";

import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
 


export default function Random() {

  const{gif,loading,featchData}= useGif();

  function clickHandler(){
    featchData();

}

  return (
    <div className="w-full border border-black rounded-lg bg-slate-400 flex flex-col mt-4">
      <h1 className="w-1/3 border-black bg-white text-black py-3 text-xl mx-auto rounded-lg mt-5 text-center">Random Gif</h1>
      <div className="mx-auto mt-5">
      {
        loading? (<Spinner/>):(
          <img src={gif} alt="gif"/>
        )
      }
      </div>
   
      <button onClick={clickHandler} className="w-1/4  border-black bg-yellow-400 text-black py-3 text-l 
      mx-auto rounded-lg mt-5 text-center mb-5">
        Generate
      </button>
    </div>
  );
}
