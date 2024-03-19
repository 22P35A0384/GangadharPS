import Userschema from '../models/newuser.js';

const Editdata = async(req,res,next) =>{
    const{fname,lname,email} = req.body;
    const mail = req.params.mail
    let edituser
    try{
        edituser = await Userschema.findOneAndUpdate({email:mail},{fname,lname,email})
        return res.status(200).json({msg:'Updated Successfully!'})
    }catch(err){
        console.log(err)
    }
}

export default Editdata;