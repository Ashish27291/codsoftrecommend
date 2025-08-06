const movies = [
      { title: "Inception", genres: ["sci-fi", "action"] },
      { title: "The Notebook", genres: ["romance", "drama"] },
      { title: "Avengers: Endgame", genres: ["action", "sci-fi"] },
      { title: "Titanic", genres: ["romance", "drama"] },
      { title: "The Matrix", genres: ["sci-fi", "action"] },
      { title: "The Hangover", genres: ["comedy"] },
      { title: "Joker", genres: ["drama"] },
      { title: "Crazy Rich Asians", genres: ["comedy", "romance"] },
      { title: "Interstellar", genres: ["sci-fi", "drama"] },
      { title: "Gladiator", genres: ["action", "drama"] }
    ];

    const genreSelect = document.getElementById("genreSelect");
    const recommendationsList = document.getElementById("recommendations");

    genreSelect.addEventListener("change", () => {
      const selectedGenre = genreSelect.value;
      recommendationsList.innerHTML = "";

      if (!selectedGenre) return;

      const filtered = movies.filter(movie => movie.genres.includes(selectedGenre));

      if (filtered.length === 0) {
        recommendationsList.innerHTML = "<li>No matches found.</li>";
      } else {
        filtered.forEach(movie => {
          const li = document.createElement("li");
          li.textContent = movie.title;
          recommendationsList.appendChild(li);
        });
      }
    });