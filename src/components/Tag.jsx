
import React, { useState } from "react";

import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
 


export default function Tag() {

  const[tag,setTag]=useState('car');

  const{gif,loading,featchData}=useGif(tag);
  function clickHandler(){
    featchData(tag);

}
function changeHandler(e){
  setTag(e.target.value);
}

  return (
    <div className="w-full border border-black rounded-lg bg-blue-300 flex flex-col mt-4">
      <h1 className="w-1/3 border-black text-black font-bold py-3 text-xl mx-auto rounded-lg mt-5 text-center">Random Gif</h1>
      <div className="mx-auto mt-5">
      {
        loading? (<Spinner/>):(
          <img src={gif} alt="gif"/>
        )
      }
      </div>
      <input
        className="w-1/2  text-black py-3 text-l 
      mx-auto rounded-lg mt-5 text-center mb-[6px]"
      onChange={changeHandler}
      value={tag}
      />
   
      <button onClick={clickHandler} className="w-1/4  border-black bg-yellow-400 text-black py-3 text-l 
      mx-auto rounded-lg mt-2 text-center mb-5">
        Generate
      </button>
    </div>
  );
}
