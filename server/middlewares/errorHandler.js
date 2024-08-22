module.exports = function errorHandler(error, req, res, next) {
    let status = error.status || 500;
    let message = error.message || "Internal Server Error";
  
    switch (error.name) {
        case "Invalid Token":
        case "JsonWebTokenError":
            status = 401;
            message = "Unauthenticated";
            break;
        case "SequelizeValidationError":
            status = 400;
            message = error.errors[0].message;
            break;
        case "Unauthorized Incorrect":
            status = 401;
            message = "Email or Password is incorrect";
            break;
        case "Bad Request Username":
            status = 400;
            message = "Username cannot be empty!"
            break;
        case "Bad Request Email":
            status = 400;
            message = "Email Address cannot be empty!"
            break;
        case "Bad Request Password":
            status = 400;
            message = "Password cannot be empty!"
            break;
        case "User Not Found":
            status = 404;
            message = 'User not found'
            break;
        case "Forbidden":
            status = 403;
            message = "You are not authorized!";
            break;
    }
    res.status(status).json({ message });
  };