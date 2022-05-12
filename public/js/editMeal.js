
const updateButtonHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#meal-name').value.trim();
    // const needed_funding = document.querySelector('#meal-funding').value.trim();
    const description = document.querySelector('#meal-details').value.trim();
    const meal_id = parseInt(document.location.pathname.split("/").slice(-2));
  
    if (title && description && meal_id) {
      const response = await fetch(`/api/meals/${meal_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create meal');
      }
    }
  };
  
  
  
  document
    .querySelector('#updateMealBtn')
    .addEventListener('click', updateButtonHandler);
  
  