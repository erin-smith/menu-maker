const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    categories: [{
        id: { type: String },
        name: { type: String, trim: true, required: true },
        items: [{
            id: {type: String},
            name: {type: String, trim: true, required: true, unique: true},
            description: {type: String, trim: true, required: true},
            available: {type: Boolean, default: false},
            photo: {type: String, required: true},
            price: {type: Number, required: true},
            modifiers: [{ 
                id:{type: String },
                name: {type: String },
                price: {type: Number }}],
            temperature: {type: String },
            taxCategory: {type: String },
            dietaryAttributes: [{
                allergen: {
                    type:String
                }
            }],
        }],
        
    }], 

});



// menuSchema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// });

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
