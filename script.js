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

// Send Email (Simulated for Now)
sendBtn.addEventListener("click", () => {
  const dateTime = document.getElementById("date-time").value;
  const selectedMovie = document.querySelector('input[name="movie"]:checked');

  if (!dateTime || !selectedMovie) {
    alert("Please pick a date and a movie!");
    return;
  }

  // Simulated email content
  const emailContent = `
    Hey Baby ko! ❤️
    Our date is set for ${dateTime}.
    We'll be watching "${selectedMovie.value}".
    I can't wait to celebrate this special moment. 🥰
  `;

  alert(`Email Sent! \n\n${emailContent}`);
  console.log(emailContent);
});
