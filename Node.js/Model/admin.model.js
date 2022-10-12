import mongoose from 'mongoose'

const adminModel = mongoose.Schema({
    fname : {
        type : String,
        require : true
    },
    lname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const adminM = mongoose.model("admin",adminModel);

export default adminM;