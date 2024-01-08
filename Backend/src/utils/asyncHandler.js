//in promise's format
const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>
        next(err))
    }
}

export {asyncHandler}

//we use this middleware to handle any asynchronous functions in our routes
//if the request handler function returns a promise, we can wrap it with this middleware
//and if there is an error inside that promise, we will catch and send it to the next
//middleware or the error handling middleware</s>
//another way of writing this using async await including try and catch block.