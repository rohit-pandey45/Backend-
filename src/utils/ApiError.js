class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something Went Wrong",
        // errors = [],
        errors = [],
        // stack = ""
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export { ApiError }

/*
class ApiError extends Error
This means ApiError inherits all properties of JavaScript's built-in Error object.

constructor(
    statusCode,
    message = "Something Went Wrong",
    errors = [],
    stack = ""
)
When creating an error:

throw new ApiError(
    404,
    "User Not Found"
);
Values become:

statusCode = 404
message = "User Not Found"
errors = []
stack = ""
Call Parent Constructor
super(message);

Calls the parent Error constructor.

Without this, Error won't be initialized correctly.

Equivalent to:

Error(message);

Stack Trace Handling
if (stack) {
    this.stack = stack;
}

If a custom stack trace is provided, use it.

Otherwise:

Error.captureStackTrace(this, this.constructor);

Creates a clean stack trace starting from where the error was thrown.
*/