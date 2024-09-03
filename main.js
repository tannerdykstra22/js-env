// Step 1, 2, 3,
var menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    // Step 4, 5
    addDishToCourse: (function (courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice,
        };
        if (courseName === 'appetizers') {
            return this.courses[courseName].push(dish);
        } else if (courseName === 'mains') {
            return this.courses[courseName].push(dish);
        } else if (courseName === 'desserts') {
            return this.courses[courseName].push(dish);
        } else {
            return "Please enter a valid course name.";
        };
    }), 

// Step 6, 7
    getRandomDishFromCourse: (function (courseName) {
        var dishes = this.courses[courseName];
        const randomIndex = Math.floor(Math.random() *dishes.length);
        return dishes[randomIndex];  
    }),
};

//  Step 8 
generateRandomMeal = (function () {
    var appetizer = menu.getRandomDishFromCourse('appetizers');
    var main = menu.getRandomDishFromCourse('mains');
    var dessert = menu.getRandomDishFromCourse('desserts');
    var totalPrice = appetizer.price + main.price + dessert.price
    return "Your meal is the", appetizer.name + ", " + main.name + ", "+ dessert.name + ", and the total is $" + totalPrice;
});

//  Step 9
menu.addDishToCourse('appetizers', 'garlic bread', 10);
menu.addDishToCourse('appetizers', 'cheese curds', 12);
menu.addDishToCourse('appetizers', 'fried calamari', 15);
menu.addDishToCourse('appetizers', 'mozz sticks', 6.49);

menu.addDishToCourse('mains', 'steak', 45);
menu.addDishToCourse('mains', 'burger', 20);
menu.addDishToCourse('mains', 'spaghetti', 15);
menu.addDishToCourse('mains', 'pizza', 10);

menu.addDishToCourse('desserts', 'skillet cookie', 15);
menu.addDishToCourse('desserts', 'ice cream', 8);
menu.addDishToCourse('desserts', 'cheesecake slice', 8);

var meal = generateRandomMeal();
console.log(meal);
