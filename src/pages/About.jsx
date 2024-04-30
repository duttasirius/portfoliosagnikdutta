import React from 'react'
import { skills } from '../constants';
 

const About = () => {
  return (
   <section className="max-container">
    

      <div className='py-10 flex flex-col'>
  

    <section className="max-container">
   <h1 className="head-text text-blue-700">
    Hello I'm Sagnik Dutta
   </h1>
   <div>
    <p className="mt-5 flex flex-col gap-3 text-slate-500">
      FullStack Devloper based in India, Specializing in Frontend & Backend Devloping.
    </p>
   </div>

   <div className="py-10 flex flex-col" >
    <h3 className="subhead-text hover:text-lime-600 cursor-pointer hover:text-4xl">My Skills </h3>
    <div className="mt-16 flex flex-wrap gap-12">
      <h2 className="text-black bg-slate-400 text-2xl rounded-lg m-2 p-2 hover:text-red-400 cursor-pointer hover:text-3xl">HTML</h2> 
      <h2 className="text-yellow-500 bg-pink-600 rounded-lg-blur m-1 p-1 text-2xl rounded-lg hover:text-3xl cursor-pointer font-bold">CSS</h2>
      <h2 className="text-purple-400 :hover-transform  bg-blue-500 rounded-lg-blur m-1 p-1 text-2xl rounded-lg hover:text-3xl cursor-pointer font-bold">TAILWIND</h2>
      <h2 className="textblue-gradient_text bg-green-400 m-1 p-1 text-2xl rounded-lg hover:text-3xl cursor-pointer font-bold ">React Js</h2>
      <h2 className="text-orange-400 :hover-transform  bg-red-300 rounded-lg-blur m-1 p-1 text-2xl rounded-lg  hover:text-3xl cursor-pointer font-bold">Node Js</h2>
      <h2 className="text-amber-950 hover:text-2xl bg-blue-100 m-1 p-1 rounded-lg text-2xl font-bold cursor-pointer">Express Js</h2>
      <h2 className="text-green-500 bg-yellow-400 rounded-lg font-bold cursor-pointer hover:text-3xl  ">Mongo DB</h2>
    </div>
   </div>
   </section>



























        <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill)=>{
          <div className='block-container w-20 h-20'>
            <div>
              <img src={skill.imageUrl}
              alt={skill.name}
              className='w-1/2 h1/2 object-contain'
              
              />
            </div>
          </div>
        })}
        </div>
      </div>


   </section>
  )
}

export default About
