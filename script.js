
// Define the Giphy API endpoint URL
const giphyRandomApiUrl = "https://api.giphy.com/v1/gifs/random?api_key=7xgpmaHmwf9d2TVLjgrlE55YdEVdUpgS&tag=&rating=g";

// Get the img and div elements
// GRAB THE BUTTON ELEMENT FROM THE DOM
const giphyImg = document.getElementById("giphyImageTag");
const giphyTitleDiv = document.getElementById("giphyTitleDiv");

// ADD A CLICK EVENT LISTENER
document.getElementById("getRandomGiphyButton").addEventListener("click", function() {
  // Make a fetch GET request to the Giphy API endpoint
  fetch(giphyRandomApiUrl)
    .then(function(response) {
      // Parse the JSON response object
      return response.json();
    })
    .then(function(data) {
      // FIND JSON RESPONSE OBJECT AND FIND THE image_url key

      const imageUrl = data.data.image_url;
      const title = data.data.title;

    //   CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url KEY
      giphyImg.setAttribute("src", imageUrl);
    //   CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY
      giphyTitleDiv.innerText = title;
    })
    .catch(function(error) {
      // Handle any errors that occur during the fetch request
      console.error(error);
    });
});









