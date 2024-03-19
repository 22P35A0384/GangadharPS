import Result from '../models/result.js';

const Sendresult=async(req,res,next)=>{
    const Rollno = req.params.roll;
    const Roll = Rollno.toUpperCase()
    let Resultstatus;
    try{
        Resultstatus = await Result.find({Htno:Roll})
        return res.status(200).json(Resultstatus)
    }catch(err){
        console.log(err)
    }
};

export default Sendresult;