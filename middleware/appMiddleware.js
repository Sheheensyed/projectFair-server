const appMiddleware=(req,res,next)=>{
    //logic
    console.log(`inside application specific middlware`);
    next()
    
}
module.exports=appMiddleware