import Adityalogins from "../models/adityalogins.js";

const Getlogin=async(req,res,next)=>{
    const username = req.body.username;
    const user = username.toUpperCase()
    const pass = req.body.password;
    let Resultstatus;
    let Userstatus;
    try{
        Userstatus = await Adityalogins.findOne({username:user})
        Resultstatus = await Adityalogins.findOne({username:user,password:pass})
        if(!Userstatus){
            return res.status(200).json(null)
        }else if(!Resultstatus){
            return res.status(200).json(false)
        }else{
            return res.status(200).json(Resultstatus)
        }
    }catch(err){
        console.log(err)
    }
};

export default Getlogin;