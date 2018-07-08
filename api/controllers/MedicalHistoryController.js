/**
 * MedicalHistoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    find: (req, res) => {
        
        if (req.headers["rut"] === "") { // user id o email
            res.json({ msg: 'add rut', error: true })
        }else {
            MedicalHistory.find({rut: req.headers["rut"]},
            ).exec(function (err, data){
                //console.log(err)

                
                

                return res.json(data);
        
            });
        }

    }
  

};

