const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/datathon")
.then(() => {
    console.log('mongodb connected')
}).catch((err) => {
    console.log('mongodb not connected')
});

const loginshcema = new mongoose.Schema({
    pid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const details = new mongoose.model("logindetails",loginshcema);

module.exports=details;