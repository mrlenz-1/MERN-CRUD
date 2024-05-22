const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://giftopd:test1234@nodedb.4bs1s2q.mongodb.net/booksdb?retryWrites=true&w=majority&appName=nodedb", {

});

mongoose.connection.on("connected", () => {
   console.log("Connected to MongoDB");

});

mongoose.connection.on("err",(err) =>{
   console.log(`MongoDB connection err: ${err}`);

});

module.exports = mongoose;