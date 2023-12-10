const populateEditForm = (customerName, movieName, showTiming) => {
    // Populate the edit form with user details
    document.getElementById('editCustomerName').value = customerName;
    document.getElementById('editMovieName').value = movieName;
    document.getElementById('editShowTiming').value = showTiming;
  
    // Display the edit form
    document.getElementById('editForm').style.display = 'block';
  };
  
  const watchMovieAsync = async () => {
    // Display user details
    // ... (existing code)
  
    // Set up event listeners for delete buttons
    // ... (existing code)
  
    // Set up event listeners for edit buttons
    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(button => {
      button.addEventListener('click', () => {
        const userId = button.parentElement.getAttribute('data-user-id');
        const customerName = button.parentElement.querySelector('#customerName').innerText;
        const movieName = button.parentElement.querySelector('#movieName').innerText;
        const showTiming = button.parentElement.querySelector('#showTiming').innerText;
  
        // Populate the edit form with user details
        populateEditForm(customerName, movieName, showTiming);
  
        // You can store userId in a variable if needed for updating the user details
      });
    });
  
    // Set up event listener for the edit form submission
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      // Get updated user details from the form
      const updatedCustomerName = document.getElementById('editCustomerName').value;
      const updatedMovieName = document.getElementById('editMovieName').value;
      const updatedShowTiming = document.getElementById('editShowTiming').value;
  
      // Get the userId from the edit form (you can store it when clicking the edit button)
      const userId = /* Retrieve userId based on your implementation */;
  
      // Update the user details on the website
      const userDetailElement = document.querySelector(`.user-detail[data-user-id="${userId}"]`);
      if (userDetailElement) {
        userDetailElement.querySelector('#customerName').innerText = updatedCustomerName;
        userDetailElement.querySelector('#movieName').innerText = updatedMovieName;
        userDetailElement.querySelector('#showTiming').innerText = updatedShowTiming;
      }
  
      // Make API call to update user details on the server
      try {
        // Perform PUT or PATCH operation using fetch or any other preferred method
        // Replace the URL with your CRUD CRUD endpoint
        const response = await fetch(`https://your-crud-crud-endpoint/${userId}`, {
          method: 'PUT', // or 'PATCH' depending on your API
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
          },
          body: JSON.stringify({
            customerName: updatedCustomerName,
            movieName: updatedMovieName,
            showTiming: updatedShowTiming,
            // Add any other fields as needed
          }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to update user detail');
        }
  
        console.log('User detail updated successfully');
      } catch (error) {
        console.error('Error updating user detail:', error);
      }
  
      // Hide the edit form after submission
      editForm.style.display = 'none';
    });
  
    console.log('Watching Movie using async/await:');
  };
  
  // Call watchMovieAsync after the DOM has loaded
  document.addEventListener('DOMContentLoaded', watchMovieAsync);
  