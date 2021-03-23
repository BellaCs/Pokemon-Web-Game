const movementsDB = require("../db/models/extra/movements.database");
const getMovement = require("../getFormatter/movementFormatter.socket");
var exports;
exports.getMovements = (pokemon_id) => {
    var movements = [];
        movementsDB.findById(pokemon_id,(error, result) =>{
            if(error!= null){
                result.forEach(element => {
                    movements.push(getMovement(element));
                });
            } else{ 
                console.log(error);
            }
        });                 
    
    return movements;
}

module.exports = exports;