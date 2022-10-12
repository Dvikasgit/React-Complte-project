import React from 'react'
import  {useForm } from 'react-hook-form'
import '../App.css';



 




function Login()
{
    const {register,handleSubmit, reset, formState:{ errors }}=useForm();

    const onsubmit=(data)=>{
            console.log(data);
            reset()
    }
    

    return(
        <div className="App-content">
<h1>Register Here!!</h1>
        <div className="login">
        <form onSubmit={handleSubmit(onsubmit)}>
           
           
            <div className="form-group">
                <label htmlFor="email">Enter Email</label>
                <input type="email" className="form-control" id="email" placeholder=" Email" name="email" 
                 {...register("email",{required:{value:true,message:"Enter Email"}})}
                 />
                {errors.email && <small style={{color:"red"}}> {errors.email.message} </small> }
            </div>           
            
            <div className="form-group">
                <label htmlFor="password">Enter Password</label>
                <input type="password" className="form-control" id="password" placeholder=" Password" name="password" 
                 {...register("password",{required:{value:true,message:"Enter Password"},minLength:{value:5,message:"Enter minimum 3 Character"},
                 maxLength:{value:8,message:"Enter maximum 8 Character"}})}
                 />
                  {errors.password && <small style={{color:"red"}}> {errors.password.message} </small> }
                
            </div>
            
            <button type="submit" id="submitbtn" className="btn btn-success">Login</button>
        </form>

            </div>
        </div>

    )
}
export default Login;
