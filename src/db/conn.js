const  mongoose = require("mongoose");

var  uri =  "mongodb+srv://unity4968:Unity4968@cluster.fh6lfb0.mongodb.net/memsworld?retryWrites=true&w=majority"

const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});