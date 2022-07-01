const fs = require('fs');
const userLogs = (req, res, next)=>{
    fs.appendFileSync('src/logs/userLogs.txt', 'El usuario ingreso a la ruta: ' + req.url + '\n');
    
    next();
}

module.exports = userLogs;