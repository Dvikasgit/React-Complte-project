import adminM from "../Model/admin.model.js";

const adminC = async  (req,res) =>{
    const{fname,lname,email,password} = req.body
    try{
           const exits = await adminM.findOne({email:email})
           if(exits){
            res.status(400).json("email already exits")
           }
           else{
            const valid = {fname:fname , lname:lname , email: email , password : password}
            const data = await adminM.create(valid);
            res.status(200).json(data)
           }
    }
    catch(error){
   console.log(error)
    }
}

export default adminC;