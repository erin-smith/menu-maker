const mongoose = require("mongoose");
const db = require("../models");
require("dotenv").config();

// This file empties the Menu collection and inserts the menu below

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/menumakerdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const menuSeed = [
  {
    daypart: "Breakfast",
    menuTime: "8am to 11am",
    categories: [
      {
        id: "1",
        name: "Sweets",
        items: [
          {
            id: "1",
            name: "Blueberry Protein Pancakes",
            description: "Protein heart-shaped pancakes with fresh blueberries",
            available: true,
            photo: "https://i.imgur.com/uRpW4bft.jpg",
            price: 12.5,
            modifiers: [
              {
                id: "modifier1",
                name: "fruit",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Vegetarian", "Gluten-Free"],
          },{
            id: "2",
            name: "Fruit Tart",
            description:
              "Graham tart filled with pastry cream and topped with fresh fruit",
            available: true,
            photo: "https://i.imgur.com/eyOMWrWt.jpg",
            price: 12.5,
            modifiers: [
              {
                id: "modifier1",
                name: "Topping",
                price: 1.5,
              },
            ],
            temperature: "cold",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Vegetarian"],
          },{
            id: "3",
            name: "Blueberry Crepes",
            description:
              "Crepes filled with pastry cream and topped with blueberry compote",
            available: false,
            photo: "https://i.imgur.com/WpvrGg2t.jpg",
            price: 12.5,
            modifiers: [
              {
                id: "modifier1",
                name: "Topping",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Vegetarian"],
          }
        ],
      },
      {
        id: "2",
        name: "Savory",
        items: [
          {
            id: "1",
            name: "Tomato Quiche",
            description: "Roasted tomato and Spinach quiche with Gruyere",
            available: true,
            photo: "https://i.imgur.com/2AjvGRet.jpg",
            price: 12.5,
            modifiers: [
              {
                id: "modifier2",
                name: "Protein",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Vegetarian"],
          },
        ],
      },
      {
        id: "3",
        name: "Coffee",
        items: [
          {
            id: "1",
            name: "Double shot Latte",
            description: "Whole milk latte with 2 espresso shots",
            available: true,
            photo: "https://i.imgur.com/6dn6rWnt.jpg",
            price: 4.5,
            modifiers: [
              {
                id: "modifier1",
                name: "milk type",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Vegetarian"],
          },{
            id: "2",
            name: "Double Cappuccino",
            description: "Traditional cappuccino with whole milk",
            available: true,
            photo: "https://i.imgur.com/3eTVCK0t.jpg",
            price: 3.5,
            modifiers: [
              {
                id: "modifier1",
                name: "milk type",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Vegetarian"],
          },
        ],
      },
    ],
  },
  {
    daypart: "Lunch",
    menuTime: "11am to 2pm",
    categories: [
      {
        id: "cat6",
        name: "Sushi",
        items: [
          {
            id: "Entree1",
            name: "Sashimi Bento Box",
            description:
              "Traditional Japanese lunchbox with an array of today's fresh fish",
            available: false,
            photo: "https://i.imgur.com/1Nr2w2ct.jpg",
            price: 22.5,
            modifiers: [
              {
                id: "modifier1",
                name: "Topping",
                price: 1.5,
              },
            ],
            temperature: "cold",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Gluten-Free"],
          },
        ],
      },
      {
        id: "cat4",
        name: "Fish",
        items: [
          {
            id: "Entree2",
            name: "Fish and Chips",
            description: "Beer Battered Cod with thick cut seasoned fries",
            available: false,
            photo: "https://i.imgur.com/gC1rV0jt.jpg",
            price: 12.5,
            modifiers: [
              {
                id: "modifier1",
                name: "Topping",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
          },
        ],
      },
      {
        id: "cat4",
        name: "Fish",
        items: [
          {
            id: "Entree3",
            name: "Seared Scallops",
            description: "Seared Scallops with a lemon butter cream sauce",
            available: false,
            photo: "https://i.imgur.com/w8kBNxTt.jpg",
            price: 14.5,
            modifiers: [
              {
                id: "modifier1",
                name: "Topping",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Gluten-free"],
          },
        ],
      },
      {
        id: "cat5",
        name: "Salads",
        items: [
          {
            id: "Entree4",
            name: "Radish Arugula Salad",
            description: "Radish arugula salad with caviar pearls",
            available: false,
            photo: "https://i.imgur.com/bB3M4Fnt.jpg",
            price: 12.5,
            modifiers: [
              {
                id: "modifier1",
                name: "Topping",
                price: 1.5,
              },
            ],
            temperature: "normal",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Gluten-Free"],
          },
        ],
      },
    ],
  },
  {
    daypart: "Dinner",
    menuTime: "5pm to 11pm",
    categories: [
      {
        id: "cat4",
        name: "Fish",
        items: [
          {
            id: "Entree1",
            name: "Mediterranean Tilapia Bake",
            description: "Family-Style Mediterranean Tilapia",
            available: false,
            photo: "https://i.imgur.com/m4g1L66t.jpg",
            price: 22.5,
            modifiers: [
              {
                id: "modifier1",
                name: "Topping",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Gluten-free"],
          },
        ],
      },
      {
        id: "cat6",
        name: "Sushi",
        items: [
          {
            id: "Entree2",
            name: "Sushi nigiri",
            description: "4 types of Sushi Nigiri (today's catch)",
            available: false,
            photo: "https://i.imgur.com/AOEv6HKt.jpg",
            price: 18.5,
            modifiers: [
              {
                id: "modifier1",
                name: "Topping",
                price: 1.5,
              },
            ],
            temperature: "cold",
            taxCategory: "Restaurant Food",
          },
        ],
      },
      {
        id: "cat4",
        name: "Fish",
        items: [
          {
            id: "Entree3",
            name: "Lobster Tail",
            description: "Two whole lobster tails poached in our famous sauce",
            available: false,
            photo: "https://i.imgur.com/0fTDtXqt.jpg",
            price: 23.5,
            modifiers: [
              {
                id: "modifier1",
                name: "sauce",
                price: 1.5,
              },
            ],
            temperature: "hot",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Gluten-Free"],
          },
        ],
      },
      {
        id: "cat7",
        name: "Cocktails",
        items: [
          {
            id: "Drink1",
            name: "Whisky Sour Lemonade",
            description: "Our Modern twist on a traditional whiskey sour",
            available: false,
            photo: "https://i.imgur.com/lTWFNc2t.jpg",
            price: 7,
            modifiers: [
              {
                id: "modifier4",
                name: "liquor",
                price: 1.5,
              },
            ],
            temperature: "cold",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Gluten-Free"],
          },
        ],
      },
      {
        id: "cat7",
        name: "Cocktails",
        items: [
          {
            id: "Drink2",
            name: "Mint Julep",
            description: "Mint Julep with sparkling mineral and fresh mint",
            available: false,
            photo: "https://i.imgur.com/SMWigPat.jpg",
            price: 7,
            modifiers: [
              {
                id: "modifier4",
                name: "liquor",
                price: 1.5,
              },
            ],
            temperature: "cold",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Gluten-Free"],
          },
        ],
      },
      {
        id: "cat7",
        name: "Cocktails",
        items: [
          {
            id: "Drink3",
            name: "Piña Colada",
            description: "Fluffy fresh take on a piña colada",
            available: false,
            photo: "https://i.imgur.com/7BFM1hit.jpg",
            price: 9,
            modifiers: [
              {
                id: "modifier1",
                name: "liquor",
                price: 1.5,
              },
            ],
            temperature: "cold",
            taxCategory: "Restaurant Food",
            dietaryAttributes: ["Gluten-Free"],
          },
        ],
      },
    ],
  },
];

db.Menu.deleteMany({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
