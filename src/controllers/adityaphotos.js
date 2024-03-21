const Getimg = (req,res)=>{
    const name=  req.params.id;
    const imgname = name.toUpperCase()
    try{
        res.sendFile(imgname,{root:"./public/images"})
    }
    catch(err){
        console.log(err)
    }
}

export default Getimg;