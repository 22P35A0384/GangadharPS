import Userschema from '../models/newuser.js';
import bcrypt from 'bcryptjs';

const Deleteuser = async(req,res,next)=>{
    const{mail,pass} = req.body
    // console.log(mail,pass)
    let deleteacc
    let getdata
    let isPasswordCorrect;
    try{
        getdata = await Userschema.findOne({email:mail})
        if(getdata){
            isPasswordCorrect = bcrypt.compareSync(pass, getdata.password)
            if(isPasswordCorrect){
                deleteacc = await Userschema.findByIdAndDelete(getdata._id)
                return res.status(200).json(true)
            }else{
                return res.status(200).json(1)
            }
        }else{
            return res.status(200).json(2)
        }
    }
    catch(err){
        console.log(err)
    }
}

export default Deleteuser;