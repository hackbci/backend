/**
 * PatientsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getPatients: (req, res) => {
        if (req.param('type_identification') === "") { // user id o email
            res.json({ msg: 'add type_identification', error: true })
        }else if (req.param('number_identification') === "") { // file
            res.json({ msg: 'add number_identification', error: true })
        } else {
            Patients.find({type_identification:req.headers["type_identification"],number_identification:req.headers["number_identification"]}).exec(function (err, patients){

                if (patients == "") {
                  res.json({msg: 'Sorry, patients not found!', error: true})
        
                }else {
                    return res.json(patients);
                }
        
            });
        }

    }
  

};

