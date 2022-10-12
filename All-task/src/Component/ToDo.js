// import React from 'react'
import React, { useState } from 'react'


export default function ToDo() {
    let [state , setState] = useState("")
  let [data,setdata]=useState([])

   let addd = () => {
     console.log(state)
     setdata([...data,state])
     console.log(data)   
     setState("")
   }
    
   let demoo = (e) => {
      setState(e.target.value)
   }
    
  let dele =(k) => {
    
    setdata((p)=>{
      return p.filter((v,i)=>{
         return k!==i
      })
    })
  }

  let editt = (index) => {
    data.forEach((val,ind) => {
      if(index===ind){
        data[index] = state;
        
      }
    })
    setState('')
  }
  return (
    <>
    <h1>Task which You Want To Remeber</h1>
  
    <div className='container'>

      <div className='row'>
        <div className='form-control'>
         <input onChange={demoo} value={state} placeholder='enter list '></input>
        <button onClick={addd} className='btn btn-success' value={state}>Adds</button>
          <p>{data.map((d,k)=>{

         return <><div><h1>{d}</h1>
                <button onClick={()=>editt(k)}   className='btn btn-warning'>edit</button>
                <button onClick={()=>dele(k)} className='btn btn-danger'>delete</button></div>
         
               </>
       })}</p>
        </div>
        
      </div>
    </div>
    
    </>


  )
}


