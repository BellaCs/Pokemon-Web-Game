const movementDB = require("../db/models/movement.database");

exports.getMovement = (movement_id, result) => {
    var movement;
        movementDB.findById(movement_id,(error, results) =>{
            if(error!= null){
                console.log("Moviment: " + results);
                result(results);
                return;
            }else{
                console.log(error);
                result(error)
            }
            
            
        });                 
    
}
