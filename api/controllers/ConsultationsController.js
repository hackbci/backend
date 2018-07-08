/**
 * ConsultationsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find: (req, res) => {
        if (req.param('rut') === "") { // user id o email
            res.json({ msg: 'add rut', error: true })
        }else {
            console.log(req.headers["rut"]);
            
            MedicalConsultation.find({rut:123123123123}).exec(function (err, consultations){
                console.log(err)

                if (patients == "") {
                  res.json({msg: 'Sorry, consultations not found!', error: true})
        
                }else {
                    return res.json(consultations);
                }
        
            });
        }

    }
  

};

