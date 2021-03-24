const movementsDB = require("../db/models/extra/movements.database");

exports.getMovements = (pokemon_id, result) => {
    var movements = [];
        movementsDB.findById(pokemon_id,(error, results) =>{
            if(error== null){
                results.forEach(element => {
                    movements.push(element.movement_id);
                });
                result(movements);
                return;
            } else{ 
                console.log(error);
                result(error);
                return;
            }
            
        });                 
    
    
};

