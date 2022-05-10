
// grab the criteria DONE
// store in an array; join with ampersands, DONE
// send to that route with a query

let myFood = {
    isGlutenFree: true,
    isNutFree: false,
    isVegan: true
}

var reqString = `?`;

for (const property in myFood) {
    console.log(`${property}: ${myFood[property]}`);
  if (myFood[property]) {
  	reqString += `&${property}=${myFood[property]}`;
  }
}
console.log(reqString);
// ?isGlutenFree=true&isVegan=true

// document.querySelector('.submitBtn').addEventListener('click', {
    
    // snippet for getting the checked or not checked value of a checkbox
        // isGlutenFree: document.querySelector('#glutenFreeCheckBox').value(),
        // isNutFree = document.querySelector('#nutFreeCheckBox').value(), 
    // isVegan
    // isDairyFree
    // isPescatarian
    // isVegetarian
    // document.location.replace('/' + reqString);
    
// })


// id="glutenFreeCheckBox"
// id="nutFreeCheckBox"
// id="veganCheckBox"
// id="dairyFreeCheckBox"
// id="pescatarianCheckBox"
// id="vegetarianCheckBox"
