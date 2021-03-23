const mariadb = require('../config/db.js');

const Movement = function (movement) {
        this.movement_id = movement.movement_id;
        this.movement_name = movement.movement_name;
        this.movement_accuracy = movement.movement_accuracy;
        this.movement_power = movement.movement_power;
        this.movement_pp = movement.movement_pp;
        this.movement_type = movement.movement_type;
}

Movement.findById = (MovementID, result) => {
        mariadb.query("SELECT * FROM movements WHERE movement_id = " + MovementID, (err, res) => {
                if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                }

                if (res.length) {
                        console.log("found customer: ", res[0]);
                        result(null, res[0]);
                        return;
                }

                // not found Customer with the id
                result({ kind: "not_found" }, null);
        });
};

module.exports = Movement;