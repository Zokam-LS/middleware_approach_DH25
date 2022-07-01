const fs = require('fs');
const userLogs = (req, res, next)=>{
    fs.appendFileSync('./logs/.userLogs.txt', 'El usuario ingreso a la ruta: ' + req + '\n');
    next();
}

module.exports = userLogs;