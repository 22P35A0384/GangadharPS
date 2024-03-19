import Userschema from '../models/newuser.js';

const Puteditimg =async(req,res,next)=>{
    //console.log(req.file)
    const {fname,lname,email} = req.body
    const profile = (req.file) ? req.file.filename : null
    const mail = req.params.mail
    let editdata;
    try{
        editdata = await Userschema.findOneAndUpdate({email:mail},{fname,lname,email,profile})
        return res.status(200).json({msg:'Updated Successfully!'})
    }catch(err){
        console.log(err)
    }
}

export default Puteditimg;