// Movies Data
const movies = [
  {
    title: "50 First Dates",
    thumbnail: "https://m.media-amazon.com/images/I/81nSaeOUA-L._AC_SY679_.jpg",
  },
  {
    title: "The Notebook",
    thumbnail: "https://m.media-amazon.com/images/I/51egRjJr3yL._AC_.jpg",
  },
  {
    title: "365 Days",
    thumbnail: "https://m.media-amazon.com/images/I/81cFJwSqsWL._AC_SY679_.jpg",
  },
];

// DOM Elements
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const datePicker = document.getElementById("date-picker");
const movieList = document.getElementById("movie-list");
const sendBtn = document.getElementById("send-btn");

// EmailJS Configuration
emailjs.init("YOUR_USER_ID"); // Replace YOUR_USER_ID with your EmailJS User ID

// No Button Behavior
noBtn.addEventListener("click", () => {
  alert("Are you sure? 😢 I promise to make it unforgettable!");
});

// Yes Button Behavior
yesBtn.addEventListener("click", () => {
  datePicker.classList.remove("hidden");
  populateMovies();
});

// Populate Movie Cards
function populateMovies() {
  movieList.innerHTML = "";
  movies.forEach((movie, index) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${movie.thumbnail}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <input type="radio" name="movie" value="${movie.title}" id="movie-${index}">
    `;

    movieList.appendChild(movieCard);
  });
}

// Send Email
sendBtn.addEventListener("click", () => {
  const dateTime = document.getElementById("date-time").value;
  const selectedMovie = document.querySelector('input[name="movie"]:checked');

  if (!dateTime || !selectedMovie) {
    alert("Please pick a date and a movie!");
    return;
  }

  // Prepare email data
  const emailParams = {
    date_time: dateTime,
    movie_title: selectedMovie.value,
  };

  // Send email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams)
    .then(() => {
      alert("Your date is set! 💌 Check your email for details.");
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Oops! Something went wrong. Please try again.");
    });
});
