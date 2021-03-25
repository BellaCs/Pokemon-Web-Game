const movementDB = require("../models/movement.database");

const movementToClient = function (movement) {
    this.movement_id = movement.movement_id;
    this.movement_name = movement.movement_name;
    this.movement_pp = movement.movement_pp;
}

exports.getMovementToClient = (movement_id, response) => {
        movementDB.findById(movement_id,(error, result) =>{
            if(error!= null){
                console.log("Moviment: " + result);
                response(null, movementToClient(result));
                return;
            }else{
                console.log(error);
                response(error, null);
                return;
            }
            
            
        });                 
    
}
