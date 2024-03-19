import mongoose from "mongoose";
const schema = mongoose.Schema;

let Result = new schema({
    Htno:{
        type:String
    },
    Subcode:{
        type:String
    },
    Subname:{
        type:String
    },
    Internals:{
        type:String
    },
    Grade:{
        type:String,
        // type:required
    },
    Credits:{
        type:String,
        // type:required
    }
});

export default mongoose.model('Result',Result)