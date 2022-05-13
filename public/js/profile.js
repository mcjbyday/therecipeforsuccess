const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/meals/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};


const EditTopicBtnHandler = async (event) => {
  const id = event.target.getAttribute('data-id');

  await document.location.replace(`/meal/${id}/edit`);
  
};


function initializedEventListeners() {
  let deleteButtons = document.querySelectorAll('.deleteTopicBtn');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", delButtonHandler);
  }

  let editButtons = document.querySelectorAll('.editTopicBtn');

  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", EditTopicBtnHandler);
  }


}

initializedEventListeners();
