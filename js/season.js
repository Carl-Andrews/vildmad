// Lytter efter DOMContentLoaded-eventet, som indikerer, at DOM'en er fuldt indlæst og klar til manipulation
document.addEventListener('DOMContentLoaded', function () {
  // Vælger alle child-elementer af elementer med klassen "grid_s1"
  const gridSeason = document.querySelectorAll('.grid_s1 > div');

  // Gennemløber hvert child-element og dets index i gridSeason
  gridSeason.forEach(function (child, index) {
    // Tilføjer en klik-hændelseslytter til hvert child-element
    child.addEventListener('click', function () {
      // Definerer en liste af kategorier
      const categories = [
        'spring',
        'summer',
        'winter',
      ];

      // Vælger kategorien baseret på det aktuelle index
      const category = categories[index];

      // Omdirigerer brugeren til "listview.html" med kategorien som en forespørgselsparameter
      window.location.href = `listview.html?Urlinfo=${category}`;
    });
  });
});

