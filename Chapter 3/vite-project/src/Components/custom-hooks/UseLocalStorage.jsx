import {useEffect, useState} from 'react'

const UseLocalStorage = () => {

    const [name,setName]=useState("")

    useEffect(()=>{
        const saved=localStorage.getItem("name")
        setName(saved)
    },[])

    const saveName=()=>{
        localStorage.setItem("name",name)
        alert("Name Saved as "+name)
    }

    const clearName=()=>{
        localStorage.removeItem("name")
        setName("")
        alert("Name removed")
    }

    // const getName=()=>{
    //     const saved=localStorage.getItem("name")
    //     setName(saved)
    // }


  return (
    <div>
        <h2>LocalStorage example</h2> 
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name here'/><br/>
        <br/> <button onClick={saveName}>Set Name</button><br/>
        <br/><button onClick={clearName}>Clear Name</button><br/>
    </div>
  )
}

export default UseLocalStorage
