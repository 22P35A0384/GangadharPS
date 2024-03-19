import Studentsschema from "../models/students.js";

const Getdatabyrollno = async(req,res,next)=>{
    let data;
    const roll = req.params.rollno
    const rollno = roll.toUpperCase()
    try{
        data = await Studentsschema.findOne({Roll_No:rollno})
        // console.log(rollno)
    }catch(err){
        console.log(err)
    }
    return res.status(200).json(data)
    // res.send(data._id)
}

export default Getdatabyrollno;