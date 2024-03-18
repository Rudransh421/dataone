const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/datathon")
  .then(() => {
    console.log("ArrestPersonDetailsdb connected");
  })
  .catch((err) => {
    console.log("ArrestPersonDetailsdb not connected");
  });

const loginshcema = new mongoose.Schema({
  District_Name: {
    type: String,
    required: true,
  },
  UnitName: {
    type: String,
    required: true,
  },

  FirNO: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  Profession: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  PresentAddress: {
    type: String,
    required: true,
  },
  PresentCity: {
    type: String,
    required: true,
  },
  PresentState: {
    type: String,
    required: true,
  },
  PermanentAddress: {
    type: String,
    required: true,
  },
  PermanentState: {
    type: String,
    required: true,
  },
  PermanentCity: {
    type: String,
    required: true,
  },
  Nationality: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  Person_No: {
    type: String,
    required: true,
  },
  Crime_No: {
    type: String,
    required: true,
  },
  Arr_ID: {
    type: String,
    required: true,
  },
  Charge_Sheeted: {
    type: String,
    required: true,
  },
  Charge_Sheet_Number: {
    type: String,
    required: true,
  },

});

const info = new mongoose.model("ArrestPersonDetails", loginshcema);

module.exports = info;
