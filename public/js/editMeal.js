
const updateButtonHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#meal-name').value.trim();
    // const needed_funding = document.querySelector('#meal-funding').value.trim();
    const post_body = document.querySelector('#meal-desc').value.trim();
    const meal_id = document.querySelector('input[name="post-id"]').value;
  
    if (title && post_body && meal_id) {
      const response = await fetch(`/api/meals/${meal_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, post_body }),
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
    .querySelector('#updateTopicBtn')
    .addEventListener('click', updateButtonHandler);
  
  