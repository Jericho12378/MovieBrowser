const postData = document.querySelector(".chosen__movieWrapper");

async function main() {
  const movieTitle = localStorage.getItem("title");
  const movie = await fetch(
    `https://www.omdbapi.com/?apikey=aca2f055&t=${movieTitle}`
  );
  const movieData = await movie.json();
  console.log(movieData.Actors);
  postData.innerHTML = `<div class="chosen__movie">
    <figure class="chosen__movie--imageWrapper">
      <img
        class="chosen__movie--image"
        src="${movieData.Poster}"
        alt=""
      />
    </figure>
    <div class="chosenMovie__title">
      <h2>${movieData.Title}</h2>
    </div>
    <h4 class="chosenMovie__year">${movieData.Year}</h4>
    <h4>Actors: ${movieData.Actors}</h4>
    <p class="chosenMovie__description">
      "${movieData.Plot}"
    </p>
  </div>`;
}

main();
