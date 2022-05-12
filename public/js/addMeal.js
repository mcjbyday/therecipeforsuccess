const newMealHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');
  
    const title = document.querySelector('#meal-name').value.trim();
    console.log(title);
    const description = document.querySelector('#meal-details').value.trim();
    console.log(description);
    
    const checkboxNodelist = document.querySelectorAll('.checkBoxes input:checked')
    const checkboxArray =  [...checkboxNodelist];
    console.log(checkboxArray);

    let propObj = {};
    for (let i = 0; i < checkboxArray.length; i++) {
        propObj[checkboxArray[i].id] = true;
    }
    console.log(propObj);
  
    if (title && description) {
      const response = await fetch(`/api/meals`, {
        method: 'POST',
        body: JSON.stringify({ title, description, ...propObj }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log(response);
        document.location.replace('/profile');
      } else {
        alert('Failed to add meal :(');
      }
    }
  };
  
  document
  .querySelector('.new-meal-form')
  .addEventListener('submit', newMealHandler);

  document.querySelectorAll('.checkBoxes input:checked')