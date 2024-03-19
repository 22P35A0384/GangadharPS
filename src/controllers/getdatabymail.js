import Userschema from '../models/newuser.js';

const Getdatabymail = async(req,res,next)=>{
    const mail = req.params.mail;
    let Data;
    try{
        Data = await Userschema.findOne({email:mail})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json(Data)
}

export default Getdatabymail;