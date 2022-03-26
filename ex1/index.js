require('./db/connect');
const express = require('express');
const Certification_router = require('./router/Certification')

const student_router = require('./router/Student');
const ReservationWhiteTest_router = require('./router/ReservationWhiteTest');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {

    res.send('<h1> DS node js </h1>');
});

app.use('/Students', student_router);
app.use('/Certifications', Certification_router);
app.use('/ReservationWhiteTests', ReservationWhiteTest_router);

app.listen(port, () => console.log(`Server running on ${port}`));