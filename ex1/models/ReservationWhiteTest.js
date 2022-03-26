const mongoose = require('mongoose');
const Joi = require('joi');
const joiObjectid = require('joi-objectid');
Joi.objectId = require('joi-objectid')(Joi);

let ReservationWhiteTest_schema = new mongoose.Schema({
    student: {
        email: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student'
        }
    },
    Certification: {
        name: String,

        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Certification'
        }
    },
    ReservationWhiteTestDate: {
        type: Date,

    }
});


let validation_appoitment = Joi.object({
    Student: {
        email: Joi.string(),
        id: Joi.objectId()
    },
    Certification: {
        name: Joi.string(),
        id: Joi.objectId()
    },
    ReservationWhiteTestDate: Joi.date(),
})

let ReservationWhiteTest = mongoose.model('ReservationWhiteTest', ReservationWhiteTest_schema);

module.exports.ReservationWhiteTest = ReservationWhiteTest;
module.exports.validation_appoitment = validation_appoitment;
