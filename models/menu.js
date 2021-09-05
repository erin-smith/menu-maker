const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
    {
    daypart: String,
    categories: [{
        id: String,
        name: { type: String, trim: true, required: true },
        items: [{
            id: String,
            name: {type: String, trim: true, required: true, unique: true},
            description: {type: String, trim: true, required: true},
            available: Boolean,
            photo: {type: String, required: true},
            price: {type: Number, required: true},
            modifiers: [{ 
                id:String,
                name:String,
                price:Number }],
            temperature: String,
            taxCategory: String,
            dietaryAttributes: Array
        }],
        
    }], 

}
);



// menuSchema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// });

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
