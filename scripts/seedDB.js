const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Menu collection and inserts the menu below

mongoose.connect(
  process.env.ATLAS_URI ||
  "mongodb://localhost/menumakerdb",  { useNewUrlParser: true, useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false }
);

const menuSeed = [
    {
            categories: [{
                id: "menu1",
                name: "Breakfast",
                items: [{
                    id: "Entree1",
                    name: "Fruit Tart",
                    description: "Graham tart filled with pastry cream and topped with ripe fresh fruit",
                          available: true,
                    photo: "https://i.imgur.com/eyOMWrWt.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "Topping",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Vegetarian"]
                }]
            }]
        },
    {
            categories: [{
                id: "menu1",
                name: "Breakfast",
                items: [{
                    id: "Entree2",
                    name: "Tomato Quiche",
                    description: "Roasted tomato and Spinach quiche with Gruyere",
                          available: true,
                    photo: "https://i.imgur.com/2AjvGRet.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier2",
                        name: "Protein",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Vegetarian"]
                }]
            }]
    },
    {
            categories: [{
                id: "menu1",
                name: "Breakfast",
                items: [{
                    id: "Entree3",
                    name: "Blueberry crepes",
                    description: "Crepes filled with pastry cream and topped with a luscious blueberry compote",
                          "available": false,
                    photo: "https://i.imgur.com/WpvrGg2t.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "Topping",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Vegetarian"]
                }]
            }]
    },
    {
            categories: [{
                id: "menu1",
                name: "Breakfast",
                items: [{
                    id: "Entree4",
                    name: "Blueberry Crumble Coffee Cake",
                    description: "Blueberry Crumble Coffee Cake",
                          available: true,
                    photo: ".https://i.imgur.com/VbO7ZaZt.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier3",
                        name: "a la mode",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Vegetarian"]
                }]
            }]
    },
    {
            categories: [{
                id: "menu1",
                name: "Breakfast",
                items: [{
                    id: "Entree5",
                    name: "Blueberry Protein Pancakes",
                    description: "Protein heart-shaped pancakes with fresh blueberries",
                          available: true,
                    photo: "https://i.imgur.com/uRpW4bft.jpg",
                    price: 12.50,
                modifiers: [{
                        id: "modifier1",
                        name: "fruit",
                        price: 1.5
                    }],
                    temperature: false,
                taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Vegetarian, Gluten-Free"]
                }]
            }]
    },
    {
            categories: [{
                id: "menu1",
                name: "Breakfast",
                items: [{
                    id: "Drink1",
                    name: "Double shot Latte",
                    description: "Whole milk latte with 2 espresso shots",
                          available: true,
                    photo: "https://i.imgur.com/6dn6rWnt.jpg",
                    price: 4.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "milk type",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Vegetarian"]
                }]
            }]
    },
    {
            categories: [{
                id: "Menu1",
                name: "Breakfast",
                items: [{
                    id: "Drink2",
                    name: "Double Cappuccino",
                    description: "Traditional cappuccino with whole milk",
                        available: true,
                    photo: "https://i.imgur.com/3eTVCK0t.jpg",
                    price: 3.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "milk type",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Vegetarian"]
                }]
            }]
    },
    {
            categories: [{
                id: "menu2",
                name: "Lunch",
                items: [{
                    id: "Entree1",
                    name: "Sashimi Bento Box",
                    description: "Traditional Japanese lunch box with an array of todays fresh fish",
                          available: false,
                    photo: "https://i.imgur.com/1Nr2w2ct.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "Topping",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Gluten-Free"]
                }]
            }]
    },
    {
        categories: [{
            id: "menu2",
            name: "Lunch",
            items: [{
                id: "Entree2",
                name: "Honey Miso Tilapia",
                description: "Honey miso grilled tilapia with green beans",
                      available: false,
                photo: "https://i.imgur.com/HUf2jq0t.jpg",
                price: 12.50,
                modifiers: [{
                    id: "modifier1",
                    name: "Topping",
                    price: 1.5
                }],
                temperature: false,
                taxCategory: "Restaurant Food"
            }]
        }]
    },
    {
            categories: [{
                id: "menu2",
                name: "Lunch",
                items: [{
                    id: "Entree3",
                    name: "Fish Tacos",
                    description: "Mahi Mahi fish tacos with guacamole and lettuce",
                          available: false,
                    photo: "https://i.imgur.com/pmSdt2bt.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "fish type",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food"
                }]
            }]
    },
    {
            categories: [{
                id: "menu2",
                name: "Lunch",
                items: [{
                id: "Entree4",
                name: "Fish and Chips",
                    description: "Beer Battered Cod with thick cut fries",
                          available: false,
                    photo: "https://i.imgur.com/gC1rV0jt.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "Topping",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food"
                }]
            }]
    },
    {
            categories: [{
                id: "menu2",
                name: "Lunch",
                items: [{
                    id: "Entree5",
                    name: "Seared Scallops",
                    description: "Seared Scallops with a lemon butter cream sauce",
                          available: false,
                    photo: "https://i.imgur.com/w8kBNxTt.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "Topping",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Gluten-free"]
                }]
            }]
    },
    {
            categories: [{
                id: "menu2",
                name: "Lunch",
                items: [{
                    id: "Entree6",
                    name: "Radish Arugula Salad",
                    description: "Radish arugula salad with caviar pearls",
                          available: false,
                    photo: "https://i.imgur.com/bB3M4Fnt.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "Topping",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Gluten-Free"]
                }]
            }]
    },
    {
            categories: [{
                id: "menu3",
                name: "Dinner",
                items: [{
                    id: "Entree1",
                    name: "Mediterranean Tilapia Bake",
                description: "Family-Style Mediterranean Tilapia",
                          available: false,
                photo: "https://i.imgur.com/m4g1L66t.jpg",
                    price: 12.50,
                    modifiers: [{
                        id: "modifier1",
                        name: "Topping",
                        price: 1.5
                    }],
                    temperature: false,
                    taxCategory: "Restaurant Food",
                    dietaryAttributes: ["Gluten-free"]
                }]
            }]
    },
    {
        categories: [{
            id: "menu3",
            name: "Dinner",
            items: [{
                id: "Entree2",
                name: "Sushi nigiri",
                description: "4 types of Nigiri todays catch",
                      available: false,
                photo: "https://i.imgur.com/AOEv6HKt.jpg",
                price: 12.50,
                modifiers: [{
                    id: "modifier1",
                    name: "Topping",
                    price: 1.5
                }],
                temperature: false,
                taxCategory: "Restaurant Food"
            }]
        }]
    },
    {
        categories: [{
            id: "menu3",
            name: "Dinner",
            items: [{
                id: "Entree3",
                name: "Feta-Spinach Salmon",
                description: "Stuffed Salmon fillet with bacon wrapped asparagus",
                      available: false,
                photo: "https://i.imgur.com/h4oo5NZt.jpg",
                price: 12.50,
                modifiers: [{
                    id: "modifier1",
                    name: "bacon",
                    price: 1.5
                }],
                temperature: false,
                taxCategory: "Restaurant Food",
                dietaryAttributes: ["Gluten-Free"]
            }]
        }]
    },
    {
        categories: [{
            id: "menu3",
            name: "Dinner",
            items: [{
                id: "Entree4",
                name: "Lobster Tail",
                description: "Two whole lobster tail poached in our famous sauce",
                      available: false,
                photo: "https://i.imgur.com/0fTDtXqt.jpg",
                price: 12.50,
                modifiers: [{
                    id: "modifier1",
                    name: "sauce",
                    price: 1.5
                }],
                temperature: false,
                taxCategory: "Restaurant Food",
                dietaryAttributes: ["Gluten-Free"]
            }]
        }]
    },{
        categories: [{
            id: "menu3",
            name: "Dinner",
            items: [{
                id: "Entree5",
                name: "Sashimi stack",
                description: "Modern take on the sashimi stack with sauce pipets",
                photo: "https://i.imgur.com/BRKaKsLt.jpg",
                price: 12.50,
                modifiers: [{
                    id: "modifier1",
                    name: "bacon",
                    price: 1.5
                }],
                temperature: false,
                taxCategory: "Restaurant Food",
                dietaryAttributes: ["Gluten-Free"]
            }]
        }]
    },{
        categories: [{
            id: "menu3",
            name: "Dinner",
            items: [{
                id: "Drink1",
                name: "Whisky Sour Lemonade",
                description: "Our Modern twist on a traditional whiskey sour",
                      available: false,
                photo: "https://i.imgur.com/lTWFNc2t.jpg",
                price: 12.50,
                modifiers: [{
                    id: "modifier4",
                    name: "liqour",
                    price: 1.5
                }],
                temperature: false,
                taxCategory: "Restaurant Food",
                dietaryAttributes: ["Gluten-Free"]
            }]
        }]
    },{
        categories: [{
            id: "menu3",
            name: "Dinner",
            items: [{
                id: "Drink2",
                name: "Mint Julep",
                description: "Mint Julep with sparkling mineral and fresh mint",
                      available: false,
                photo: "https://i.imgur.com/SMWigPat.jpg",
                price: 12.50,
                modifiers: [{
                    id: "modifier4",
                    name: "liquor",
                    price: 1.5
                }],
                temperature: false,
                taxCategory: "Restaurant Food",
                dietaryAttributes: ["Gluten-Free"]
            }]
        }]
    },{
        categories: [{
            id: "menu3",
            name: "Dinner",
            items: [{
                id: "Drink3",
                name: "Piña Colada",
                description: "Fluffy fresh take on a piña colada",
                      available: false,
                photo: "https://i.imgur.com/7BFM1hit.jpg",
                price: 12.50,
                modifiers: [{
                    id: "modifier4",
                    name: "liquor",
                    price: 1.5
                }],
                temperature: false,
                taxCategory: "Restaurant Food",
                dietaryAttributes: ["Gluten-Free"]
            }]
        }]
    }
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
  