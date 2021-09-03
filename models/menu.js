const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    categories: [{
        id: { type: String,trim: true, required: true },
        name: { type: String,trim: true, required:true },
        items: [{
            id: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true,
                unique: true,
            },
            description: {
                type: String,
                trim: true,
                required: true
            },
            available: {
                type: Boolean,
                required: true
            },
            photo: {
                type: String,
                trim: true,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            modifiers: [{
                id:{
                    type: String,
                    trim: true,
                    required: true,
                },
                name: {
                    type: String,
                    trim: true,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }],
            temperature: {
                type: String,
                trim: true,
                required: false
            },
            taxCategory: {
                type: String,
                trim: true,
                required: true
            },
            dietaryAttributes: {
                type: Array,
                trim: true,
                required: false
            },

        }],
        
    }], 

});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;