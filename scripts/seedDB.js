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
    PharmName: "The Dead Zone",
    PharmAddress: "Stephen King",
    
    date: new Date(Date.now())
  },
  {
    PharmName: "Lord of the Flies",
    PharmAddress: "William Golding",
    
    date: new Date(Date.now())
  },
  {
    PharmName: "The Catcher in the Rye",
    PharmAddress: "J.D. Salinger",
    
    date: new Date(Date.now())
  },
  {
    PharmName: "The Punch Escrow",
    PharmAddress: "Tal M. Klein",
    
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
