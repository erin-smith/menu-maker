const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    menuId: {
        type: String,
        trim: true,
       unique: true,
    },
    categories: [{
        categoryId: {
            type: String,
            trim: true,
            unique: true,

        },
        itemName: {
            type: String,
            trim: true,
            required: true,
        },
        items: [{
            itemId: {
                type: String,
                trim: true,
                unique: true,
            },
            itemName: {
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
                modifierId:{
                    type: String,
                    trim: true,
                    unique: true,
                },
                modifierName: {
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
                type: String,
                trim: true,
                required: false
            },

        }],
        
    }], 

});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;