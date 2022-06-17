const mongoose = require('mongoose');

const db='mongodb+srv://isha_03:isha_03@cluster0.kytibw0.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})