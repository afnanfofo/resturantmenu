function button(){
    document.getElementById("dishes").classList.toggle("active");

    var price = document.getElementById("price");
    var foodname = document.getElementById("foodName");
    var category = document.getElementById("category");
    var image = document.getElementById("image");
    var ingredients = document.getElementById("ingredients");

    console.log(foodname);
    console.log(price);
    console.log(category);
    console.log(image);
    console.log(ingredients);

    
}

let dishesIndex = 0;
showDishes();

function showDishes() {
  let dishes = [
    {
       name: "burger",
       price: 20.0,
       category: "fast food",
       image: "images/22.jpg",
       ingredients: "meat, cheese, onion, bread"
    },
    {
      name: "Bob corn",
      price: 15.0,
      category: "fast food",
      image: "images/fast9.jfif",
      ingredients : "chicken, cheese, crispy"
    },
    {
      name: "pizza",
      price: 25.0,
      category: "fast food",
      image: "images/3.jpeg",
      ingredients : "olive, cheese, phalanx ,sauce"
    },
    {
      name: "Streps",
      price: 20.99,
      category: "fast food",
      image: "images/fast3.jfif",
      ingredients: "chicken, cheese, crispy"
    },
    {
      name: "burger Crispy",
      price: 31.0,
      category: "fast food",
      image: "images/fast4.jfif",
      ingredients: "chicken, cheese, crispy"
    },
    {
      name: "chicken Crispy",
      price: 27.0,
      category: "fast food",
      image: "images/fast5.jfif",
      ingredients: "chicken, cheese, crispy"
    },
    {
      name: "Bob corn sandwich",
      price: 25.0,
      category: "fast food",
      image: "images/fast6.jfif",
      ingredients: "chicken, cheese, crispy"
    },
    {
      name: "chicken sandwich",
      price: 20.0,
      category: "fast food",
      image: "images/fast8.jfif",
      ingredients: "chicken, cheese, crispy"
    },
    {
      name: "pizza",
      price: 25.0,
      category: "fast food",
      image: "images/2.jpeg",
      ingredients : "olive, cheese, phalanx ,sauce"
    },

    {
      name: "shawerma sandwich",
      price: 25.0,
      category: "fast food",
      image: "images/11.jpeg",
      ingredients: "chicken,onion , Bread "
    },
    {
      name: "cheese friza",
      price: 20.0,
      category: "fast food",
      image: "images/7.jpeg",
      ingredients: "cheese, crispy"
    },
    {
      name: "shawerma meal",
      price: 20.0,
      category: "fast food",
      image: "images/9.jpg",
      ingredients: "meal ,onion , Bread"
    },
  
 ]
}