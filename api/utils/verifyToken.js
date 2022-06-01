import { Jwt } from "jsonwebtoken";
import { createError, createHotel } from "../utils/error.js";

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated"))
    }
    jwt.verify(token,process.env.jwt,(err,user)=>{
        if(err)return next(createError(403, "Token is not valid"));
        req.user=user
        next()
    })
}

export const verfyUser =(req,res,next)=>{
    verifyToken(req,res, next,()=>{
        if(req.user.id===req.params.id || req.use.isAdmin){
            next()
        }else{
            if(err) returnnext(createError(403,"you are not authorized"))
        }
    })
}

export const verfyAdmin =(req,res,next)=>{
    verifyToken(req,res, next,()=>{
        if(req.use.isAdmin){
            next()
        }else{
            if(err) returnnext(createError(403,"you are not authorized"))
        }
    })
}