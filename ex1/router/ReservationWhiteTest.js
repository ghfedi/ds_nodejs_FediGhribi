const router = require('express').Router();
const { ReservationWhiteTest, validation_appoitment } = require('../models/ReservationWhiteTest');

const auth = require('../middlewares/auth')
const authoris = require('../middlewares/authoris');
const { Certification } = require('../models/Certification');


// get all ReservationWhiteTests
router.get('', [auth, authoris], async (req, res) => {

    let apoit = await ReservationWhiteTest.find();
    res.send(apoit);
});

// add new ReservationWhiteTest
router.post('', auth, async (req, res) => {
    try {
        let result_valid = validation_appoitment.validate(req.body);
        if (result_valid.error)
            return res.status(400).send(result_valid.error.details[0].message);

        let apoit = new ReservationWhiteTest(req.body);

        apoit = await apoit.save();
        res.status(201).send(apoit);
    } catch (error) {
        res.status(400).send('Problem saving Apoointment : ' + error.message)
    }

});


module.exports = router
