import express, { application } from "express"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/auth.js"
import hotelsRoute from "./routes/auth.js"
import roomsRoute from "./routes/auth.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
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
// app.use("api/auth", authRoute)
// app.use(express.json());

app.use("/auth", authRoute)
app.use("/users", authRoute)
app.use("/hotels", authRoute)
app.use("/rooms", authRoute)
app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})
