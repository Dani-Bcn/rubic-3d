import React, { useState } from "react";

export default function Controls(props) {

 
  const {funcUp} = props
  const {funcDown} = props
  console.log(props)
 
  return (
    <main className="absolute z-[150] w-60 h-full  flex items-start">
      <div className=" flex flex-col  justify-center items-center p-2 m-5 rounded-xl gap-2 bg-gradient-to-t from-red-950 to-indigo-500 border border-indigo-600 shadow-2xl ">
        <button
          id="up"
        onFocus={() => funcUp()} 
          className="bg-blue-400  w-10 h-9 rotate-90 p-1 rounded-lg shadow-2xl "
        >
        
          ◀️
        </button>
        <span>
          <button className="bg-blue-400  w-10 rotate-0 p-1 rounded-lg ">
          
            ◀️
          </button>
          <button className="bg-blue-400  w-10 h-10 rotate-0 p-1 rounded-[100px] m-2">
           <p className="text-[0.7em] font-bold">Zoom</p>
          </button>
          <button className="bg-blue-400 w-10 rotate-180 p-1 rounded-lg ">
         
            ◀️
          </button>
        </span>
        <button 
          onClick={() => funcDown()} 
        className="bg-blue-400 w-10 -rotate-90 p-1 rounded-lg ">
        
          ◀️
        </button>
      </div>
    </main>
  );
}
