import dotenv from 'dotenv'



import express from "express"
import connectDB from "./db/dbconnect.js";
const app = express()


dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000, ()=>{
        console.log(`Server is running at ${process.env.PORT}`)
    })
})
.catch((err)=>{
 console.log("Monngo Db connect failed",err)
})




// (async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_Name}`)
//        app.on("error", ()=>{
//         console.log("Eror", error)
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listning on PORT: ${process.env.PORT}`)
//        })
//     }catch(error){
//         console.log("error :", error)
//         throw err
//     };
//     {

//     }
// })()