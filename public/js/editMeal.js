

  const updateButtonHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');
  
    const title = document.querySelector('#meal-name').value.trim();
    console.log(title);
    const description = document.querySelector('#meal-details').value.trim();
    console.log(description);
    // collect the meal id from the URL
    const meal_id = parseInt(document.location.pathname.split("/").slice(-2));
    console.log(description);
    const checkboxNodelist = document.querySelectorAll('.checkState');
    const checkboxArray =  [...checkboxNodelist];
    console.log(checkboxArray);
    
    let propObj = {};
    for (let i = 0; i < checkboxArray.length; i++) {
        propObj[checkboxArray[i].id] = checkboxArray[i].checked;;
    }
    console.log(propObj);
  
    if (title && description && meal_id) {
      const response = await fetch(`/api/meals/${meal_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description, ...propObj }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        // console.log(response);
        document.location.replace('/profile');
      } else {
        alert('Failed to update this meal');
      }
    }
  };
  
  document
  .querySelector('.update-meal-form')
  .addEventListener('submit', updateButtonHandler);

  document
    .querySelector('#updateMealBtn')
    .addEventListener('click', updateButtonHandler);
