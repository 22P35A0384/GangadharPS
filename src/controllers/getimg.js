const Getimg = (req,res)=>{
    const name=  req.params.id;
    try{
        res.sendFile(name,{root:"./public/images"})
    }
    catch(err){
        console.log(err)
    }
}

export default Getimg;