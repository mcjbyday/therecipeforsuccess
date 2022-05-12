const newMealHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');
  
    const title = document.querySelector('#meal-name').value.trim();
    console.log(title);
    const mealDetails = document.querySelector('#meal-details').value.trim();
    console.log(mealDetails);
  
    if (title && mealDetails) {
      const response = await fetch(`/api/meals`, {
        method: 'POST',
        body: JSON.stringify({ title, mealDetails }),
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