// Initialize variables
let ratingState = document.querySelector('#rating-state');
let thankYouState = document.querySelector('#thank-you-state');
let listOfNumRating = document.querySelectorAll('.circle');
let submitBtn = document.querySelector('#submitBtn');
let ratingMsg = document.querySelector('#rating-msg');
let rating = 0;

// Hide the thank-you-state.
thankYouState.style.display = 'none';

// Check if there's a item that has 'active-rating' class and removes it if it has.
function checkActiveRating() {

  // Iterates through all the ratings.
  listOfNumRating.forEach((listItem, listIndex) => {

    // Check if the current item is have this class.
    if(listItem.classList.contains('active-rating')) {
  
      // Remove the class.
      listItem.classList.toggle('active-rating');
    }
  });
}

// Getting the rating based on having a 'active-rating' class.
function getRating() {

  // Iterates through all the ratings.
  listOfNumRating.forEach((listItem, listIndex) => {

    if(listItem.classList.contains('active-rating')) {
  
      rating = listIndex + 1; // Getting the rating based on the index.
    }
  });
}

// Executing each time a specific rating is clicked
listOfNumRating.forEach((listItem) => {

  listItem.addEventListener('click', (e) => {

    checkActiveRating(); // Execute this function

    // Add this class to the clicked rating.
    e.target.classList.toggle('active-rating');

    getRating(); // Execute this function

    console.log("The rating is " + rating);
  });
});

// Execute each time 'submitBtn' is clicked.
submitBtn.addEventListener('click', () => {

  if(rating != 0) {

    thankYouState.style.display = 'block';
    ratingState.style.display = 'none';
    ratingMsg.innerText = rating.toString().concat(" ", ratingMsg.innerText);
  } else {

    alert('Please rate first before submitting!')
  }
});

