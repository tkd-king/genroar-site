"use client"
import React, { useState } from 'react'
  
function Home() {

  const [name, setname] = useState("")
  const [submit, setsubmint] = useState(false)

  const handelsubmint = (e) =>{
    e.preventDefault();
    setsubmint(true)
  }

  return (
    <div className=''>
{!submit ? (
  <form onSubmit={handelsubmint}>
    <label  htmlFor="">
      name: <input className='bg-blue-500' type="text" value={name} onChange={(e)=> setname(e.target.value)} />
    </label>
    <label htmlFor="">
      <button type='submit'>submint</button>
    </label>
  </form>
) : (
  <h1> welcome my jan {name}!</h1>
)}

    </div>
  )
}

export default Home