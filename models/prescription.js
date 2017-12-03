const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  PharmName: { type: String, required: true },
  PharmAddress: { type: String, required: true },
  PharmPhone: {type: String, required:true},
  PharmDrugNum: {type: String, required:true},
  PharmFillDate: {type: String, require: true},
  DocName: {type: String, required: true},
  PatientName: {type: String, required:true},
  DrugInstruct: {type: String, required: true},
  DrugName: {type: String, required: true},
  DrugRefill: {type: String, required:true},
  DrugUseByDate: {type: String, required:true},
  date: { type: Date, default: Date.now }
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;