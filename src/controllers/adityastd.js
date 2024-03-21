    import Adityalogins from "../models/adityalogins.js";

    const Adityastd=async(req,res,next)=>{
        const username = req.body.username;
        const user = username.toUpperCase()
        // const x = req.body.need
        let Userstatus;
        try{
            Userstatus = await Adityalogins.findOne({username:user})
            // console.log(Userstatus)
            return res.status(200).json(Userstatus)
        }catch(err){
            console.log(err)
        }
    };

    export default Adityastd;