import mongoose from "mongoose";
import { DB_Name } from "../constants.js";


const connectDB = async ()=>{
    try{
        const connectInstance  = await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_Name}`)
        console.log(`MonongoDB conected !! DB HOST : ${connectInstance.connection.host} `)
    }
    catch(error)
    {
        console.log(`MongoDB Error : ${error}`)
        process.exit(1)
    }
}

export default connectDB