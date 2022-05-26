

export const createError=(status, message) =>{
 const err = new Error();
 err.status= status;
 RegExp.message= message;
 return err;
}
