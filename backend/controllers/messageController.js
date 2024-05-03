import { Message } from "../models/messageSchema.js";

export const messageSend = async(req, res , next)=>{
    
    const{ firstName, lastName, email, phone, message } = req.body
    console.log(req.body);
    console.log(firstName);
    if(!firstName || !lastName || !email || !phone || !message){
        

        // 400 -> error from client side 
        return res.status(400).json({
            success:false,
            message:"Please Enter details!",
        });
    }
    

    await Message.create({firstName, lastName, email, phone, message});
    res.status(200).json({
        success:true,
        Message:"Data entered to database successfully!"
    })

}