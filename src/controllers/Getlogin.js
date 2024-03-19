import Userschema from '../models/newuser.js';
import bcrypt from 'bcryptjs';

const PostLogin = async(req,res,next)=>{
    // console.log(req.body)
    const mail = req.body.user;
    const pass = req.body.pass;
    let checkmail;
    let isPasswordCorrect;
    try{
        checkmail = await Userschema.findOne({email:mail})
        // checkpass = await Userschema.findOne({email:mail,password:pass})
        // return res.status(200).json(true)
    }catch(err){
        console.log(err)
    }
    // console.log(isPasswordCorrect)
    if(!checkmail){
        return res.status(200).json({msg:'Invalid User!'})
    }else{
        isPasswordCorrect = bcrypt.compareSync(pass, checkmail.password)
        if(isPasswordCorrect===false){
            return res.status(200).json(false)
        }else{
            return res.status(200).json(true)
        }
    }
    // return res.status(200).json(checkpass._id)
}

// const PostLogin = async(req, res, next) => {
//     const {user, pass} = req.body;
//     let existingUser;
//     try{
//         existingUser = await Userschema.findOne({email:user});
//     }catch(err){
//         return console.log(err)
//     }
//     if(!existingUser){
//         return res.status(400).json({message:"Couldnt Find User By This Email."})
//     }
//     const isPasswordCorrect = bcrypt.compareSync(pass,existingUser.password);
//     if(!isPasswordCorrect){
//         return res.status(400).json({message:"Incorrect Password."})
//     }
//     return res.status(200).json(existingUser)

// }

export default PostLogin;