import express, { application } from "express"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/auth.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
// import res from "express/lib/response"

const app =express()
dotenv.config()
const connect = async ()=>{
try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
} catch (error) {
throw error;
}
};
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})
app.get("/", (req,res)=>{
    res.send("hello first request")
})

//middlewaves
app.use(express.json());
app.use(cookieParser())

// app.use("api/auth", authRoute)


app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)

app.use((err,reg,res,next)=>{
    // console.log("hi i am a midleware")
    const errorStatus= err.status || 500
    const errorMessage= err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false.valueOf,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})
app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")

})
