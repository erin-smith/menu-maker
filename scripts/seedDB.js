const mongoose = require("mongoose");
const nodemon = require("nodemon");
const db = require("../models");

// This file empties the Menu collection and inserts the menu below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/menu-maker"
);

const menuSeed = [
    {
            "id": "Breakfast1",
            "categories": [{
                "id": "Entree1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
                    "name": "Fruit Tart",
                    "description": "Graham tart filled with pastry cream and topped with ripe fresh fruit",
                          "available": true,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "Toppings",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Vegetarian"]
                }]
            }]
        },
    {
        "id": "Breakfast2",
            "categories": [{
                "id": "Entree2",
                "name": "Breakfast",
                "items": [{
                    "id": "item2",
                    "name": "Tomato Quiche",
                    "description": "Roasted tomato and Spinach quiche with Gruyere",
                          "available": true,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "Protein",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Vegetarian"]
                }]
            }]
    },
    {
        "id": "Breakfast3",
            "categories": [{
                "id": "Entree3",
                "name": "Breakfast",
                "items": [{
                    "id": "item3",
                    "name": "Blueberry crepes",
                    "description": "Crepes filled with pastry cream and topped with a luscious blueberry compote",
                          "available": false,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "Topping",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Vegetarian"]
                }]
            }]
    },
    {
        "id": "Breakfast4",
            "categories": [{
                "id": "Entree4",
                "name": "Breakfast",
                "items": [{
                    "id": "item4",
                    "name": "Blueberry Crumble Coffee Cake",
                    "description": "Blueberry Crumble Coffee Cake",
                          "available": true,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "a la mode",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Vegetarian"]
                }]
            }]
    },
    {
        "id": "Breakfast5",
            "categories": [{
                "id": "Entree5",
                "name": "Breakfast",
                "items": [{
                    "id": "item5",
                    "name": "Blueberry Protein Pancakes",
                    "description": "Protein heart-shaped pancakes with fresh blueberries",
                          "available": true,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "fruit",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Vegetarian, Gluten-Free"]
                }]
            }]
    },
    {
        "id": "Breakfast6",
            "categories": [{
                "id": "Drink1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
                    "name": "Double shot Latte",
                    "description": "Whole milk latte with 2 espresso shots",
                          "available": true,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 4.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "milk type",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Vegetarian"]
                }]
            }]
    },
    {
        "id": "Breakfast7",
            "categories": [{
                "id": "Drink2",
                "name": "Breakfast",
                "items": [{
                    "id": "item2",
                    "name": "Double Cappuccino",
                    "description": "Traditional cappuccino with whole milk",
                          "available": true,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 3.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "milk type",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Vegetarian"]
                }]
            }]
    },
    {
        "id": "Lunch1",
            "categories": [{
                "id": "Entree1",
                "name": "Lunch",
                "items": [{
                    "id": "item1",
                    "name": "Sashimi Bento Box",
                    "description": "Traditional Japanese lunch box with an array of todays fresh fish",
                          "available": false,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "Topping",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Gluten-Free"]
                }]
            }]
    },
    {
        "id": "Lunch2",
        "categories": [{
            "id": "Entree2",
            "name": "Lunch",
            "items": [{
                "id": "item2",
                "name": "Honey Miso Tilapia",
                "description": "Honey miso grilled tilapia with green beans",
                      "available": false,
                "photo": "https://exampleurl.com/image.png",
                "price": 12.50,
                "modifiers": [{
                    "id": "modifier1",
                    "name": "Topping",
                    "price": 1.5
                }],
                "temperature": false,
                "taxCategory": "Restaurant Food"
            }]
        }]
    },
    {
        "id": "Lunch3",
            "categories": [{
                "id": "Entree3",
                "name": "Lunch",
                "items": [{
                    "id": "item3",
                    "name": "Fish Tacos",
                    "description": "Mahi Mahi fish tacos with guacamole and lettuce",
                          "available": false,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "fish type",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food"
                }]
            }]
    },
    {
        "id": "Lunch4",
            "categories": [{
                "id": "Entree4",
                "name": "Lunch",
                "items": [{
                    "id": "item4",
                    "name": "Fish and Chips",
                    "description": "Beer Battered Cod with thick cut fries",
                          "available": false,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "Topping",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food"
                }]
            }]
    },
    {
        "id": "Lunch5",
            "categories": [{
                "id": "Entree5",
                "name": "Lunch",
                "items": [{
                    "id": "item5",
                    "name": "Seared Scallops",
                    "description": "Seared Scallops with a lemon butter cream sauce",
                          "available": false,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "Topping",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Gluten-free"]
                }]
            }]
    },
    {
        "id": "Lunch6",
            "categories": [{
                "id": "Entree6",
                "name": "Lunch",
                "items": [{
                    "id": "item6",
                    "name": "Radish Arugula Salad",
                    "description": "Radish arugula salad with caviar pearls",
                          "available": false,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "Topping",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Gluten-Free"]
                }]
            }]
    },
    {
        "id": "Dinner1",
            "categories": [{
                "id": "Entree1",
                "name": "Dinner",
                "items": [{
                    "id": "item1",
                    "name": "Mediterranean Tilapia Bake",
                    "description": "Family-Style Mediterranean Tilapia",
                          "available": false,
                    "photo": "https://exampleurl.com/image.png",
                    "price": 12.50,
                    "modifiers": [{
                        "id": "modifier1",
                        "name": "Topping",
                        "price": 1.5
                    }],
                    "temperature": false,
                    "taxCategory": "Restaurant Food",
                    "dietaryAttributes": ["Gluten-free"]
                }]
            }]
    },
    {
        "id": "Dinner2",
        "categories": [{
            "id": "Entree2",
            "name": "Dinner",
            "items": [{
                "id": "item2",
                "name": "Sushi nigiri",
                "description": "4 types of Nigiri todays catch",
                      "available": false,
                "photo": "https://exampleurl.com/image.png",
                "price": 12.50,
                "modifiers": [{
                    "id": "modifier1",
                    "name": "Topping",
                    "price": 1.5
                }],
                "temperature": false,
                "taxCategory": "Restaurant Food"
            }]
        }]
    },
    {
        "id": "Dinner3",
        "categories": [{
            "id": "Entree3",
            "name": "Dinner",
            "items": [{
                "id": "item3",
                "name": "Feta-Spinach Salmon",
                "description": "Stuffed Salmon fillet with bacon wrapped asparagus",
                      "available": false,
                "photo": "../client/src/assets/images/dinner3.jpg",
                "price": 12.50,
                "modifiers": [{
                    "id": "modifier1",
                    "name": "bacon",
                    "price": 1.5
                }],
                "temperature": false,
                "taxCategory": "Restaurant Food",
                "dietaryAttributes": ["Gluten-Free"]
            }]
        }]
    }
  ];
  
  db.Menu
    .remove({})
    .then(() => db.Menu.collection.insertMany(menuSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  