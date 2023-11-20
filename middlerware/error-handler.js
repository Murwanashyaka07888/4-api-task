const erroHandlerMiddleware = async(err,req,res,next)=>{
console.log(err)
return res.status(4000).json({msg:'something went wrong try again later'})
}

module.exports = erroHandlerMiddleware