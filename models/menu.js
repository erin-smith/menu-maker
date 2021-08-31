const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    categories: [{
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        items: [{
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            available: {
                type: Boolean,
                required: true
            },
            photo: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            modifiers: [{
                id: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }],
            temperature: {
                type: String,
                required: false
            },
            taxCategory: {
                type: String,
                required: true
            },
            dietaryAttributes: {
                type: String,
                required: false
            }

        }]
    }]

});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;