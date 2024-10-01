class ApiError extends Error{
    constructor(statusCode,message="Something went Wrong ",errors=[],stack){
        super(message);
        this.statusCode=statusCode;
        this.data=null;

        //just to know that the message property exists.As error msg was already set by super(message).
        this.message=message;
        this.success=false;
        this.errors=errors;


        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        } 

    }
}


export {ApiError}