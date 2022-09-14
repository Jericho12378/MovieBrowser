// https://www.omdbapi.com/?apikey=aca2f055&s=movie&type=movie&y=2020
//<i class="fa-solid fa-film"></i>
//https://www.omdbapi.com/?apikey=aca2f055&s=movie&y=?
// aca2f055

const movieLists = document.querySelector(".movies");
let movieTitle = "Movie";

async function getMovies() {
  return moviesDat;
}

async function searchMovie() {
  movieTitle = document.getElementById("inputfield").value;
  let movies = await fetch(
    `https://www.omdbapi.com/?apikey=aca2f055&s=${movieTitle}&type=movie&y=?`
  );
  let moviesData = await movies.json();
  console.log(moviesData);
  movieLists.innerHTML = moviesData.Search.map((element) =>
    postHTML(element)
  ).join("");
}

async function renderMovies(filter) {
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=aca2f055&s=${movieTitle}&type=movie&y=?`
  );
  const moviesData = await movies.json();

  if (filter === "YearAscending") {
    moviesData.Search.sort((a, b) => a.Year - b.Year);
  } else if (filter === "YearDescending") {
    moviesData.Search.sort((a, b) => b.Year - a.Year);
  }

  movieLists.innerHTML = moviesData.Search.map((element) =>
    postHTML(element)
  ).join("");
}

function postHTML(element) {
  return `<div class="movie" onclick="showDescription( '${element.Title}')">
  <figure class="movie__image--wrapper">
      <img class="movie__img" src="${element.Poster}" alt="">
  </figure>
  <div class="movie__title">
     <h3>${element.Title}</h3>
  </div>
  <div class="movie__year">
    <p>${element.Year}</p>
  </div>
</div>`;
}

setTimeout(() => {
  renderMovies();
});

function filterBooks(event) {
  renderMovies(event.target.value);
}


function showDescription(title){

  localStorage.setItem("title", title)
   window.open().location.href = `${window.location.origin}/movie.html`
}