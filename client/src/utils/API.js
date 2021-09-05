import axios from "axios";

export default {
  // Gets all books
  getMenus: function() {
    return axios.get("/api/menus");
  },
  // Gets the book with the given id
  getMenuItem: function(id) {
    return axios.get("/api/menus/" + id);
  },
  // Deletes the book with the given id
  deleteMenuItem: function(id) {
    return axios.delete("/api/menus/" + id);
  },
  // Saves a book to the database
  saveMenuItem: function(menuData) {
    return axios.post("/api/menus", menuData);
  },
  uploadPhoto: function(photo){
    return axios.post("/api/menus", photo)
  }
};
