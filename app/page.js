"use client"
import { Main } from 'next/document';
import React, { useState } from 'react'


const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("")
  const [Maintask, setMaintask] = useState([])
  const submitthandler=(e)=>{
      e.preventDefault();
      //console.log(title);
      //console.log(desc);
      setMaintask([...Maintask,{title,desc}]);
      setdesc("");
      settitle("");
      console.log(Maintask);
  }
  const deletehandler=(i)=>{
    let copylist= [...Maintask];
    copylist.splice(i,1);
    setMaintask(copylist);

  }
  let rendertask=<h2>Task not available</h2>;
  if(Maintask.length>0)
  {
  rendertask= Maintask.map((t,i)=>{return <ul key={i} className='flex items-center justify-between'>
    <div className='flex items-center justify-between mb-5 w-2/3'>
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6 className='text-xl font-semibold'>{t.desc}</h6>
    <button onClick={()=>{deletehandler(i)}} className='bg-red-400 text-white text-bold px-4 py-2 border-black rounded ml-10'> Delete</button>
  </div>
  </ul>})
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Vanshika's TODO list</h1>
    <form onSubmit={submitthandler}>
      <input type='text' className=' border-4 border-zinc-800 m-8 px-2 py-4' placeholder='Enter title here' value={title} onChange={(e)=>{settitle(e.target.value);}}/>
      <input type='text' className=' border-4 border-zinc-800 m-8 px-2 py-4' placeholder='Enter description here' value={desc} onChange={(e)=>{setdesc(e.target.value);}}/>
    <button className='bg-black text-white text-bold px-4 py-2 m-8 rounded '>Add Task</button> 
    
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>{rendertask}</div>
    </>
  )
}

export default page
//the page gets reloaded if we press the button initially
//when we just put value={title} then we wont be able to see what we are typing. so we use onchange. now in onchange we make a function where we are putting e.target 
//which will display the proporties of the place where we are clicking, and when we put .value, then the va;ue of the
//will be displayed in letter by letter, like d e a d will be displayed on the console
//so we are using two way binding to change the value of the variable title and also show it. so within the function
//we use settitle(e.target.value), this changes the value of the variable title and since value={title} we are able
//to see it in the box
//two way binding is this- we are makiing changes in ttile and not really typing in the box
//we ar eseeing the change in the variable being replicated there
//the default of form is that on submission it gets reloded, but we dont want that to happen so we make a function
//and prevent the submission by using the function and preventdefault and within the submithandler function, we have to
//set the title and the desc otherwise the values will remain in the field. this is again happening because 
//we ar enot writing in the box instead we are manipulating a variable and showing it to the client
//e.preventDefault(); helps to retain the output and prevents reloading
// setMaintask([...Maintask,{title,desc}]);is used to keep the previous tasks visible and stored too, when a new 
//task is added
//when i display the maintask on the console, i would see the array of all the previous entries, but not the one just added
//... used to store previous values, .map() used to iterate over an array wihtout loop
//the map mehtod is put in if condition so that no task is a vailable is displayed by default
//key={i} gives identification for react, makes it easier
//we afre using onclick={()=>{deletehandler(i)}} instead of just onclick={deletehandler(i)} because this directly 
//gets called