const mongoose = require("mongoose"),
      passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
   firstName : {
      type: String,
      trim: true,
   },
   lastName : {
      type: String,
      trim: true,
   },
   username : {
      type: String,
      trim: true,
   },
   email : {
      type: String,
      trim: true,
   },
   password : String,
   joined : {type: Date, default: Date.now()},
   scheduleIssueInfo : [{
      schedule_info : {
         id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Rezervo",
         },
      },
   }],
   gender : String,
   address : String,
   isAdmin : {type : Boolean, default : false},
});

userSchema.plugin(passportLocalMongoose);

module.exports =  mongoose.model("User", userSchema);
