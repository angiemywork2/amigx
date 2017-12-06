import axios from "axios";

export default {
  // Gets all books
  getPrescriptions: function() {
    return axios.get("/api/prescriptions");
  },
  // Gets the book with the given id
  getPrescription: function(id) {
    return axios.get("/api/prescriptions/" + id);
  },
  // Deletes the book with the given id
  deletePrescription: function(id) {
    return axios.delete("/api/prescriptions/" + id);
  },
  // Saves a book to the database
  savePrescription: function(prescriptionsData) {
    return axios.post("/api/prescriptions", prescriptionsData);
  },

  translate: function(prescription){
    return axios.post("/api/translate")
  }
};
