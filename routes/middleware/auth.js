/*
@docs
auth :
    This file handles the auth middleware functionality.
    If the auth function recieves a token from header it verifies it and decodes the value.
    After decoding we'll get the id of user and is set to the req.user and passed.
    If there is no token or an Error occurs during the verification process then the auth function fires a response with status 400 BAD_REQUEST
*/

const jwt = require('jsonwebtoken')
const config = require('../../config/keys')

var auth = function (req, res, next) {
    let token = req.headers.x_auth
    
    // invalid token - synchronous
    try {
        jwt.verify(token, config.jwt , function(err , decoded){
            if (err) throw err

            req.user = decoded
            next()
        });
    } catch(err) {
        // err
        return res.status(400).json({"message" : "Authentication Failed , Try Logging in"})
    }
}

module.exports = auth