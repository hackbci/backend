/**
 * NotificationsController
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

      create: (req, res) => {
        
        switch (req.param('type_notifications')) {
          case "0": // reminders
    
              pusher.trigger('my-channel', 'my-event', {
                "message": "hello world"
              });

              Notifications.create(req.allParams(), function NotificationsCreated(err, NotificationsCreated) {
                if (err) return res.json(err);
                res.json(NotificationsCreated)
              })
              
              res.json({msg: 'NotificationsCreated!', error: false})
              break;
          case "1": 
                //other case
    
              break;
          case "2":
                //other case

              
              break;
          case "3":
                //other case
              break;
        }
       
      },
    
      find: (req, res) => {
        Notifications.find({
            rut:req.headers["rut"]
        }).exec(function (err, notifications){
          if (err) {
            return res.json(err);
          }
    
          if (notifications == "") {
            res.json({msg: 'Sorry, no notifications are registered!', error: true})
          } else {
            return res.json(notifications);
    
          }
        });
      },
    
      readStatus: (req, res) => {
    
        Notifications.update({rut:req.headers["rut"]},{active:true}).exec(function afterwards(err, updated){
    
            if (err) {
    
                return res.json(500, { error: err });
    
            }
    
            return res.json(200, { success: updated });
    
        });
    
      },
    
      readAllNotifications: (req, res) => {
    
        Notifications.find({
          rut:req.headers["rut"]
        }).exec(function (err, notifications){
          if (notifications == "") {
            //res.json({msg: 'Sorry, no notifications are registered!', error: true})
          } else {
    
            for(let i=0; i < notifications.length; i++ ){
              Notifications.update({id: notifications[i].id},{active:true}).exec(function afterwards(err, updated){
    
                if (err) {
                  res.status(500).json({ msj: err, error:true });
                return;
    
                }
              });
    
            }
            res.status(200).json({ success: "all notifications read all success", error:false });
                return;
          }
        });
    
      }
  

};

