let drinkName = document.querySelector("#drinkName");
let drinkImg = document.querySelector("#drinkImg");

fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
.then(function (response) {
    return response.json();
})

.then(function (data) {
   console.log(data);
   console.log(data['drinks'][0].strDrink);
   console.log(data['drinks'][0].strDrinkThumb);

   let name = data['drinks'][0].strDrink;
   let image = data['drinks'][0].strDrinkThumb;

   drinkName.innerHTML = name;
   drinkImg.src = image;
});