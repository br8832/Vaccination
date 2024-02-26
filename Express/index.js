const express = require('express');
const port = 9000;
const app = express(); 
//need a public api
const cors = require("cors");
app.use(cors()); 
// routes
const vaccineRouter = require('./Router/vaccine-route');
const hospitalRouter = require('./Router/hospital-route');
const userRouter = require('./Router/user-route');
const appointmentRouter = require('./Router/appointment-route');
const vaccineApp = express();
const hospitalApp = express();
const userApp = express();
const appointmentApp = express();

//set request type to json
app.use(express.json({limit:'2mb', extended:false})); 
app.use('/vaccine', vaccineApp);
vaccineApp.use('/', vaccineRouter);
// set up the routes
app.use('/hospital', hospitalApp);
hospitalApp.use('/', hospitalRouter);

app.use('/user', userApp);
userApp.use('/', userRouter);

app.use('/appointment', appointmentApp);
appointmentApp.use('/', appointmentRouter);


console.log(`we are listening on port ${port} with url http://localhost:${port}`)
app.listen(port)