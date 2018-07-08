/**
 * RemindersController
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

    sendNotification : (req, res) => {

        pusher.trigger('my-channel', 'my-event', {
            "message": `Es hora de tomar tu medicamentos: ${req.param('medicines')}`,
            "advice":"Recuerda que tomar tus medicamentos correspondientes ayuda tu salud!",
          });

        res.json({msg: 'send notifications reminders!', error: false})


    }
  

};

