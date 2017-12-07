const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/amigx",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    PharmName: "CVS",
    PharmAddress: "123 Main St",
    PharmPhone: "252 312 2314",
    PharmDrugNum: "12334",
    PharmFillDate: "12/12/1234",
    DocName: "Dr. Name",
    PatientName: "Dan",
    DrugInstruct: "take 3 a day",
    DrugName: "tylenol",
    DrugRefill:"4",
    DrugUseByDate: "12/30/1234",    
    date: new Date(Date.now())
  },
  {
    PharmName: "Kroger",
    PharmAddress: "4456 King Ave",
    PharmPhone: "252 312 2314",
    PharmDrugNum: "12334",
    PharmFillDate: "12/12/1234",
    DocName: "Dr. Name",
    PatientName: "Dan",
    DrugInstruct: "take 3 a day",
    DrugName: "tylenol",
    DrugRefill:"4",
    DrugUseByDate: "12/30/1234",
    date: new Date(Date.now())
  },
  {
    PharmName: "CVS",
    PharmAddress: "123 Main St",
    PharmPhone: "252 312 2314",
    PharmDrugNum: "12334",
    PharmFillDate: "12/12/1234",
    DocName: "Dr. Name",
    PatientName: "Dan",
    DrugInstruct: "take 3 a day",
    DrugName: "tylenol",
    DrugRefill:"4",
    DrugUseByDate: "12/30/1234",    
    date: new Date(Date.now())
  },
  {
    PharmName: "Kroger",
    PharmAddress: "4456 King Ave",
    PharmPhone: "252 312 2314",
    PharmDrugNum: "12334",
    PharmFillDate: "12/12/1234",
    DocName: "Dr. Name",
    PatientName: "Dan",
    DrugInstruct: "take 3 a day",
    DrugName: "tylenol",
    DrugRefill:"4",
    DrugUseByDate: "12/30/1234",
    date: new Date(Date.now())
  }
];
  

db.Prescription
  .remove({})
  .then(() => db.Prescription.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
