const Getprofile = (req,res)=>{
    const name=  req.params.id;
    try{
        res.sendFile(name,{root:"./public/profiles"})
    }
    catch(err){
        console.log(err)
    }
}

export default Getprofile;