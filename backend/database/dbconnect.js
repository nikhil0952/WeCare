import mongoose from "mongoose";

export const dbconnect = ()=>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "HOSPITAL_MANAGEMENT"
    }).then(()=>{
        console.log("Succesfully connected with database!");
    }).catch(err=>{
        console.log(`Error in connecting with database ${err}`); 
    })
}