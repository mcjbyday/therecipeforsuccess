
function init() {
    document.querySelector('#viewAllButton').addEventListener('click', viewAllHandler);
        
    document.querySelector('#preferencesBtn').addEventListener('click', preferencesBtnHandler);
}

function setCheckBoxesFromURL() {
    // build an array of the parameters for the filter
    if (document.location.search) {
        const myCriteria = document.location.search.slice(1).split("&")
        
        // create an array consisting only of the criteria to be checked on start
        myCheckboxes = myCriteria.map((criteria) => {
            return criteria.split("=")[0]    
        })
        
        // set the value of each checkbox on page load
        for (let i=0; i<myCheckboxes.length; i++) {
            document.querySelector(`[name="${myCheckboxes[i]}"]`).checked = true;
        }
    }
}

const preferencesBtnHandler = async (event) => {
    // snippet for getting the checked or not checked value of a checkbox

    const myFood = {
        is_dairy_free: document.querySelector('#dairyFreeCheckBox').checked, 
        is_gluten_free: document.querySelector('#glutenFreeCheckBox').checked,
        is_nut_free: document.querySelector('#nutFreeCheckBox').checked, 
        is_pescatarian: document.querySelector('#pescatarianCheckBox').checked, 
        is_vegan: document.querySelector('#veganCheckBox').checked, 
        is_vegetarian: document.querySelector('#vegetarianCheckBox').checked, 
    }
    await console.log(myFood);
    var reqString = `?`;

    for (const property in myFood) {
        // console.log(`${property}: ${myFood[property]}`);
        if (myFood[property]) {
            reqString += `${property}=${myFood[property]}&`;
        }
    }

    reqString = reqString.slice(0, -1);
    // await console.log(reqString + " after");

    document.location.replace('/' + reqString);

}

const viewAllHandler = async (event) => {
    document.location.replace('/');
}

setCheckBoxesFromURL();

init()