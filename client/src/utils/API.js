import axios from "axios";

export default {
  // Gets all items
  getMenus: function() {
    return axios.get("/api/menus");
  },
  // Gets the items with the given id
  getMenu: function(id) {
    return axios.get("/api/menus/" + id);
  },
  // Deletes the item with the given id
  deleteMenuItem: function(id) {
    return axios.delete("/api/menus/" + id);
  },
  // Saves a item to the database
  saveMenuItem: function(menuData) {
    return axios.post("/api/menus", menuData);
  },
  // Saves a item to the database
  updateMenu: function(id, menuData) {
    return axios.put("/api/menus/" + id, menuData);
  },
  uploadPhoto: function(photo){
    return axios.post("/api/menus", photo)
  }
};
