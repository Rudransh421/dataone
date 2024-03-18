const express = require("express");
const app = express();

const path = require("path");
const hbs = require("hbs");
const collection = require("../controller/mongodb");
const templatepath = path.join(__dirname, "../templates");

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "datathon";

const chargesheets = require("../controller/chargesheetdb");
const ArrestPersonDetails = require("../controller/ArrestPersonDetailsdb");
const fir = require("../controller/firdb");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatepath);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, resp) => {
  resp.render("login");
});

app.post("/", async (req, resp) => {
  try {
    const check = await collection.findOne({
      pid: req.body.pid,
    });

    if (check.password === req.body.password) {
      resp.render("home");
    } else {
      resp.send("wrong password");
    }
  } catch {
    resp.send("wrong details");
  }
});

app.get("/new", async (req, resp) => {
  resp.render("new");
});

app.get("/reopen", async (req, resp) => {
  resp.render("reopen");
});
app.get("/draft", async (req, resp) => {
  resp.render("draft");
});

app.get("/view", (req, resp) => {
  resp.render("view");
});

app.post("/view", async (req, resp) => {
  try {
    const result = await client.connect();
    const db = result.db(database);
    const collection = db.collection("complaintDetails");
    const response = await collection
      .find({ Fir_ID: req.body.Fir_ID })
      .toArray();
    if (response.length > 0) {
      resp.send(response);
    } else {
      resp.send("not found");
    }
  } catch (error) {
    console.error(error);
    resp.send("An error occurred");
  } finally {
    await client.close();
  }
});

app.post("/chargesheet", async (req, resp) => {
  const {
    District_Name,
    UnitName,
    FirNO,
    year,
    month,
    Nmae,
    age,
    caste,
    Profession,
    Gender,
    PresentAddress,
    PresentCity,
    PresentState,
    PermanentAddress,
    PermanentState,
    PermanentCity,
    Nationality,
    DOB,
    Person_No,
    Crime_No,
    Arr_ID,
    Charge_Sheeted,
    Charge_Sheet_Number,
  } = req.body;

  try {
    const data = {
      District_Name,
      UnitName,
      FirNO,
      year,
      month,
      Nmae,
      age,
      caste,
      Profession,
      Gender,
      PresentAddress,
      PresentCity,
      PresentState,
      PermanentAddress,
      PermanentState,
      PermanentCity,
      Nationality,
      DOB,
      Person_No,
      Crime_No,
      Arr_ID,
      Charge_Sheeted,
      Charge_Sheet_Number,
    };

    await chargesheets.insertMany([data]);
    resp.json({ message: "chargesheets input  successful" });
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" });
  }
});

app.post("/ArrestPersonDetails", async (req, resp) => {
  const {
    District_Name,
    UnitName,
    FirNO,
    year,
    month,
    Nmae,
    age,
    caste,
    Profession,
    Gender,
    PresentAddress,
    PresentCity,
    PresentState,
    PermanentAddress,
    PermanentState,
    PermanentCity,
    Nationality,
    DOB,
    Person_No,
    Crime_No,
    Arr_ID,
    Charge_Sheeted,
    Charge_Sheet_Number,
  } = req.body;

  try {
    const data = {
      District_Name,
      UnitName,
      FirNO,
      year,
      month,
      Nmae,
      age,
      caste,
      Profession,
      Gender,
      PresentAddress,
      PresentCity,
      PresentState,
      PermanentAddress,
      PermanentState,
      PermanentCity,
      Nationality,
      DOB,
      Person_No,
      Crime_No,
      Arr_ID,
      Charge_Sheeted,
      Charge_Sheet_Number,
    };

    await ArrestPersonDetails.insertMany([data]);
    resp.json({ message: "ArrestPersonDetails input  successful" });
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" });
  }
});

app.post("/fir", async (req, resp) => {
  const {
    District_Name,
    UnitName,
    FirNO,
    Rl,
    year,
    month,
    Offence_From_Date,
    Offence_To_Date,
    FIR_Reg_DateTime,
    FIR_Date,
    FIR_Type,
    FIR_Stage,
    Complaint_Mode,
    CrimeGroup_Name,
    CrimeHead_Name,
    Latitude,
    Longitude,
    ActSection,
    IOName,
    KGID,
    IOAssigned_Date,
    Internal_IO,
    Place_of_Offence,
    Distance_from_PS,
    Beat_Name,
    Village_Area_Name,
    Male,
    Female,
    Boy,
    Girl,
    Age,
    VICTIM_COUNT,
    Accused_Count,
    Arrested_Male,
    Arrested_Female,
    Arrested_Count_No,
    Accused_ChargeSheeted_Count,
    Conviction_Count,
    FIR_ID,
    Unit_ID,
    Crime_No,
  } = req.body;

  try {
    const data = {
      District_Name,
      UnitName,
      FirNO,
      Rl,
      year,
      month,
      Offence_From_Date,
      Offence_To_Date,
      FIR_Reg_DateTime,
      FIR_Date,
      FIR_Type,
      FIR_Stage,
      Complaint_Mode,
      CrimeGroup_Name,
      CrimeHead_Name,
      Latitude,
      Longitude,
      ActSection,
      IOName,
      KGID,
      IOAssigned_Date,
      Internal_IO,
      Place_of_Offence,
      Distance_from_PS,
      Beat_Name,
      Village_Area_Name,
      Male,
      Female,
      Boy,
      Girl,
      Age,
      VICTIM_COUNT,
      Accused_Count,
      Arrested_Male,
      Arrested_Female,
      Arrested_Count_No,
      Accused_ChargeSheeted_Count,
      Conviction_Count,
      FIR_ID,
      Unit_ID,
      Crime_No,
    };

    await fir.insertMany([data]);
    resp.json({ message: "fir input  successful" });
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("port connected");
});
