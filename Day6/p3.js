const rawMovies = ["Inception|Sci-Fi|12000","The Lion King|Animation|8000","Mad Max|Action|invalid","The Matrix|Sci-Fi|15000","Gladiator|Action|4500"];

function processMovies(movies) {
  const result = (movies || [])
    .map((movie) => {const [name = "Unknown", genre = "Unknown", rawViews = "0"] = movie.split("|");
    let views = Number(rawViews);
    if (isNaN(views)) {
        views = 0;
      }
    return {name,genre,views};
    })
    .filter((movie) => (movie.genre === "Action" ||movie.genre === "Sci-Fi") &&movie.views > 5000)
    .sort((a, b) => b.views - a.views);

  return JSON.stringify(result, null, 2);
}

console.log(processMovies(rawMovies));