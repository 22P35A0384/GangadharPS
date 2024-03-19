import Studentsschema from '../models/students.js';

const Putstudentstatus= async(req,res,next)=>{
    const roll = req.body.Roll_No;
    const status = req.body.Status;
    let Passstatus;
    try{
        Passstatus = await Studentsschema.findOneAndUpdate({Roll_No:roll},{status})
        if(Passstatus){
            // console.log(Passstatus)
            return res.status(200).json(true)
        }else{
            console.log(Passstatus)
            return res.status(200).json(false)
        }
    }catch(err){
        console.log(err)
    }
}

export default Putstudentstatus;