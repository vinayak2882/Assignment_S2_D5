const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Vinayak2882:VIna2882@cluster0.mcpnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
};

module.exports = connect;
