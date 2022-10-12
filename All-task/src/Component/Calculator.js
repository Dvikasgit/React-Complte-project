import React,{useState} from 'react'
import '../cal.css';


export default function Calculator() {
    const [result, setResult] = useState("");
    const [value,setvalue]=useState("false")

    const clickHandler = (event)=>{
        setResult(result.concat(event.target.value))
        setvalue("true")
    }
    const clickHandler1 = (event)=>{
        if(value==='true'){
            setResult(result.concat(event.target.value))
            setvalue("false")
        }
        
    }

    const clearDis = () => {
        setResult("");
    }

    const calculate = () => {


        setResult(eval(result).toString())
        
    }
  return (
    <div>
        <div className='container'>
         <input type='text'  placeholder='0' id='first' value={result}/>
         <input type='button' value='9' className='button' onClick={clickHandler}/>
         <input type='button' value='8' className='button' onClick={clickHandler}/>
         <input type='button' value='7' className='button' onClick={clickHandler}/>
         <input type='button' value='6' className='button' onClick={clickHandler}/>
         <input type='button' value='5' className='button' onClick={clickHandler}/>
         <input type='button' value='4' className='button' onClick={clickHandler}/>
         <input type='button' value='3' className='button' onClick={clickHandler}/>
         <input type='button' value='2' className='button' onClick={clickHandler}/>
         <input type='button' value='1' className='button' onClick={clickHandler}/>
         <input type='button' value='0' className='button' onClick={clickHandler}/>
         <input type='button' value='.' className='button' onClick={clickHandler1}/>
         <input type='button' value='+' className='button' onClick={clickHandler1}/>
         <input type='button' value='-' className='button' onClick={clickHandler1}/>
         <input type='button' value='*' className='button' onClick={clickHandler1}/>
         <input type='button' value='/' className='button' onClick={clickHandler1}/>
         <input type='button' value='=' className='button' onClick={calculate}/>
         <input type='button' value='Clear'  id='cl' onClick={clearDis}/>

        </div>
    </div>
  )
}
