import mongoose  from "mongoose";
const EdSchema = new mongoose.Schema({
    lastName: {
      type: String,
    },
    firstName: {
      type: String,
    },
    schoolName: {
      type: String,
      
    },
    city: {
      type: String,
     
    },
    email: {
      type: String,
      
    },
    phoneNumber: {
      type: String,
    },
    message: {
      type: String,
    },
  });
  
  // Create the model
  const Ed = mongoose.model("Ed", EdSchema);
  
  export default Ed;