import React from "react"
import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App() {
  return (
    <div className="w-full mt-5">
      <h1 className="w-10/12 border border-black rounded-md leading-5 bg-slate-500 text-white
      text-center text-3xl font-bold mx-auto p-5">Random GIFS</h1>
      <div className="flex flex-col mx-auto w-[70%]">
      <Random/>
      <Tag/>
      </div>
    </div>
  )
}
