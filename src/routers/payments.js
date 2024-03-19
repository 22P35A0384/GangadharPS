import express from 'express';
const Router = express.Router();
import Razorpay from 'razorpay';
import crypto from 'crypto';

Router.post('/registration',async(req,res,next)=>{
    try{
        // console.log('rzp_test_mGGsDwW7xRGWWm')
        // console.log('dcVrXWziSMbSMpUbKb8XgVLT')
        const instance = new Razorpay({
            key_id: 'rzp_test_mGGsDwW7xRGWWm',
            key_secret: 'dcVrXWziSMbSMpUbKb8XgVLT',
        });

        const options = {
            amount:req.body.amount*100,
            currency:'INR',
            receipt:crypto.randomBytes(10).toString('hex'),
        };

        instance.orders.create(options,(err,order)=>{
            if(err){
                console.log(err);
                return res.status(500).json({msg:'Something Went Wrong'})
            }
            res.status(200).json(order);
        });
    }catch(err){
        console.log(err)
        res.status(500).json({msg:'Internal Server Error'});
    }
});

// payment verify

Router.post('/verify',async(req,res,next)=>{
    try{
        const{razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature}=req.body;
        const sign = razorpay_order_id+"|"+razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256",'dcVrXWziSMbSMpUbKb8XgVLT')
            .update(sign.toString())
            .digest("hex");
        if(razorpay_signature===expectedSign){
            return res.status(200).json({msg:'Payment Verified Successfully'})
        }else{
            // console.log(razorpay_signature)
            // console.log(expectedSign)
            return res.status(200).json({msg:'Invalid Signature Sent!!'})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({msg:'Internal Server Error'});
    }
})

export default Router;