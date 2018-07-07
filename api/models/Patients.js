/**
 * Patients.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //number: { type: 'number', required: true },
    
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    date: { type: 'string', required: true },
    birthdate: { type: 'string' },
    age: { type: 'string' },
    sex: { type: 'string' },
    type_identification: { type: 'string' },
    number_identification: {type: 'string'},
    nacionality: { type: 'string' },
    forecast: { type: 'string' },
    activity: { type: 'string' },
    region: { type: 'string' },
    commune: { type: 'string' },
    street: { type: 'string' },
    number: { type: 'number' },
    type_housing: { type: 'string' },
    telephone: { type: 'string' },
    email: { type: 'string' },
    telephone_emergency: { type: 'string' },
    morbid_background: { type: 'string' },
    gyneco_obstetric_history: { type: 'string' },
    surgeries: { type: 'string' },
    habits: { type: 'string' },
    commonly_used_medications: { type: 'string' },
    allergies: { type: 'string' },
    social_personal_background: { type: 'string' },
    family_background: { type: 'string' },
    createdAt: { type: 'string', autoCreatedAt: true },
    updatedAt: { type: 'string', autoUpdatedAt: true },







    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

