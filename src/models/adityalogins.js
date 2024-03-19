import mongoose from "mongoose";
const schema = mongoose.Schema;

let Aditya_Logins = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    type_of_user:{
        type:String
    },
    name:{
        type:String
    },
    branch:{
        type:String
    },
    college:{
        type:String
    },
    year:{
        type:String
    },
    batch:{
        type:String
    },
    course:{
        type:String
    },
    gender:{
        type:String
    },
    type:{
        type:String
    },
});

export default mongoose.model('Aditya Logins',Aditya_Logins)