const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/datathon")
  .then(() => {
    console.log("firdb connected");
  })
  .catch((_err) => {
    console.log("firdb not connected");
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
  Rl: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  Offence_From_Date: {
    type: Date,
    required: true,
  },
  Offence_To_Date: {
    type: Date,
    required: true,
  },
  FIR_Reg_DateTime: {
    type: Date,
    required: true,
  },
  FIR_Date: {
    type: Date,
    required: true,
  },
  FIR_Type: {
    type: String,
    required: true,
  },
  FIR_Stage: {
    type: String,
    required: true,
  },
  Complaint_Mode: {
    type: String,
    required: true,
  },
  CrimeGroup_Name: {
    type: String,
    required: true,
  },
  CrimeHead_Name: {
    type: String,
    required: true,
  },
  Latitude: {
    type: String,
    required: true,
  },
  Longitude: {
    type: String,
    required: true,
  },
  ActSection: {
    type: String,
    required: true,
  },
  IOName: {
    type: String,
    required: true,
  },
  KGID: {
    type: String,
    required: true,
  },
  IOAssigned_Date: {
    type: Date,
    required: true,
  },
  Internal_IO: {
    type: String,
    required: true,
  },
  Place_of_Offence: {
    type: String,
    required: true,
  },
  Distance_from_PS: {
    type: String,
    required: true,
  },
  Beat_Name: {
    type: String,
    required: true,
  },
  Village_Area_Name: {
    type: String,
    required: true,
  },
  Male: {
    type: String,
    required: true,
  },
  Female: {
    type: String,
    required: true,
  },
  Boy: {
    type: String,
    required: true,
  },
  Girl: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
    required: true,
  },
  VICTIM_COUNT: {
    type: String,
    required: true,
  },
  Accused_Count: {
    type: String,
    required: true,
  },
  Arrested_Male: {
    type: String,
    required: true,
  },
  Arrested_Female: {
    type: String,
    required: true,
  },
  Arrested_Count_No: {
    type: String,
    required: true,
  },
  Accused_ChargeSheeted_Count: {
    type: String,
    required: true,
  },
  Conviction_Count: {
    type: String,
    required: true,
  },
  FIR_ID: {
    type: String,
    required: true,
  },
  Unit_ID: {
    type: String,
    required: true,
  },
  Crime_No: {
    type: String,
    required: true,
  }
});

const details = new mongoose.model("fir", loginshcema);

module.exports = details;
