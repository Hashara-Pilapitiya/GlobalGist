const jwt = require("jsonwebtoken");
const HTTPError = require("../models/errorModel.js");

const authMiddleware = async (req, res, next) => {
    const Authorization = req.headers.authorization || req.headers.authorization;

    if (Authorization && Authorization.startsWith("Bearer")) {
            const token = Authorization.split(" ")[1];
            jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
                if (err) {
                    return next(new HTTPError("Not authorized, token failed", 403));
                }

                req.user = info;
                next();

            })

        } else {
            return next(new HTTPError("Not authorized, no token", 403));
        }
        
    }


module.exports = authMiddleware;
