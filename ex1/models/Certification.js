const mongoose = require('mongoose');
const Joi = require('joi');

let Certification_schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    disponiblities: {
        type: [Date]

    },

});

let validation_Certification = Joi.object({
    name: Joi.string().min(3).required(),
    disponiblities: Joi.array().items(Joi.date().greater('now'))
})

let Certification = mongoose.model('Certification', Certification_schema);

module.exports.Certification = Certification;
module.exports.validation_Certification = validation_Certification;
