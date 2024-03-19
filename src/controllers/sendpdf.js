const Sendpdf = (req,res)=>{
    const name=  req.params.id;
    try{
        res.sendFile(name,{root:"./public/pdfs"})
    }
    catch(err){
        console.log(err)
    }
}

export default Sendpdf;