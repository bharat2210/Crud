const mongoos = require('mongoose')
mongoos.connect('mongodb://0.0.0.0:27017/Store');

// const mongoose = require("mongoose");

// module.exports = async function connection() {
//     try {
//         const connectionParams = {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//         };
//         await mongoose.connect('mongodb://0.0.0.0:27017/Store', connectionParams);
//         console.log("connected to database");
//     } catch (error) {
//         console.log(error);
//         console.log("could not connect to database");
//     }
// };