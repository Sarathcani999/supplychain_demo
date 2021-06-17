/*
@docs

Created for Testing / developer purpose .
No need for the application

*/

const chalk = require('chalk')

var routeName = function (req, res, next) {
    
    console.log(chalk.bold.blueBright('Request route : ' ) , chalk.bold.white(req.url)  , chalk.redBright('(' , req.method , ')'))
    console.log(chalk.bold.greenBright('Request body  : ' ) , 
        (
            JSON.stringify(req.body) === "{}" ? 
            chalk.bold.white("No Body") : 
            chalk.bold.white(JSON.stringify(req.body))
        ) 
    )
    console.log("---------------------HEADERS---------------------")
    console.log(req.headers)

    next()
}

module.exports = routeName