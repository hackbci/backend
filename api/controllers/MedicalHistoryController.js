/**
 * MedicalHistoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var Pusher  = require('pusher')

var pusher = new Pusher({
    appId: '556806',
    key: 'f706aca5379fb3c2f172',
    secret: 'ced8c99316596f352644',
    cluster: 'us2',
    encrypted: true
});


module.exports = {

    find: (req, res) => {
        
        if (req.headers["rut"] === "") { // user id o email
            res.json({ msg: 'add rut', error: true })
        }else {
            MedicalHistory.find({rut: req.headers["rut"]},
            ).exec(function (err, data){

                return res.json(data);
        
            });
        }

    },

    create: (req, res) => {

        MedicalHistory.create(req.allParams(), function NotificationsCreated(err, NotificationsCreated) {
            if (err) return res.json(err);

            pusher.trigger('my-channel', 'my-history', {
                data: req.allParams()
    
              });
            return res.json(NotificationsCreated)
          })

    }
  

};

