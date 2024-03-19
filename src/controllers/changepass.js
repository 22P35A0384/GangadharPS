import Userschema from '../models/newuser.js';
import bcrypt from 'bcryptjs';

const Putupdatepass = async(req,res,next)=>{
    const mail = req.params.mail
    const {oldpass,newpass,cnfpass} = req.body;
    // console.log(mail)
    const password = bcrypt.hashSync(newpass)
    let updatepass=false;
    let getid;
    let isPasswordCorrect;
    try{
        getid = await Userschema.findOne({email:mail})
        isPasswordCorrect = bcrypt.compareSync(oldpass, getid.password)
        if(isPasswordCorrect){updatepass = await Userschema.findOneAndUpdate({email:mail},{password})}
        // console.log(updatepass)
        // console.log(getid)
    }catch(err){
        console.log(err)
    }
    if(!updatepass){
        return res.status(200).json(false)
    }else{
        return res.status(200).json(true)
    }
}

export default Putupdatepass;