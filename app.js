console.log("Let's get this party started!");

const $searchForm = $("#search-form");
const $searchInput = $("#search-input");
const $gifContainer = $("#gif-container");
const $removeAllButton = $("#remove-all");


$searchForm.submit(async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const searchTerm = $searchInput.val(); // Get the user's search term
    const apiKey = "t9bCNnH5lpFLct1mjUxFAdVNduL0Czso"; // Replace with your Giphy API key

    try {
      const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchTerm,
          api_key: apiKey,
        },
      });

      // Append the first GIF from the response to the container
      const gifUrl = res.data.data[0].images.fixed_height.url;
      const $gif = $("<img>").attr("src", gifUrl);
      $gifContainer.append($gif); // add the new one
      // Clear the search input field
      $searchInput.val("");



      console.log(res.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  
});

$removeAllButton.click(function() {
    $gifContainer.empty(); // Remove all images from the container
});

