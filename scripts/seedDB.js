const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Menu collection and inserts the menu below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/menu-maker"
);

const menuSeed = [
    {
            "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item2",
                    "name": "Tomato Quiche",
                    "description": "Roasted tomato and Spinach quiche with Gruyere",
                          "available": false,
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
        "categories": [{
            "id": "category1",
            "name": "Breakfast",
            "items": [{
                "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
            "categories": [{
                "id": "category1",
                "name": "Breakfast",
                "items": [{
                    "id": "item1",
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
        "id": "menu1",
        "categories": [{
            "id": "category1",
            "name": "Breakfast",
            "items": [{
                "id": "item1",
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
        "id": "menu1",
        "categories": [{
            "id": "category1",
            "name": "Breakfast",
            "items": [{
                "id": "item1",
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
  