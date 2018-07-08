/**
 * MedicalConsultationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    find: (req, res) => {
        if (req.headers["rut"] === "") { // user id o email
            res.json({ msg: 'add rut', error: true })
        }else {
            MedicalConsultation.find({rut:req.headers["rut"],}).exec(function (err, MedicalConsultation){

                if (MedicalConsultation == "") {
                  res.json({msg: 'Sorry, MedicalConsultation not found!', error: true})
        
                }else {
                    return res.json(MedicalConsultation);
                }
        
            });
        }

    }
  

};

