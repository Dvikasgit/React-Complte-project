import React, { useState , useEffect} from 'react'


export default function Fetch() {
    const [item , setItem] = useState("")

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
            (result) => {
                setItem(result);
                console.log(result)
            },

            (error)=>{
                console.log(error);
            }
        )
    }, [])
  return (
    <>
       <table id='demo'>

        <tr>
        <td>Name</td>
        <td>Age</td>
        </tr>
       {item && item.map((val,key)=>{

        return (
            <tr key={key}>
                <td>{val.username}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.address.street}</td>
                <td>{val.address.city}</td>
            </tr>
        )
       })}
       </table>
   
    </>

  )
}
