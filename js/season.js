document.addEventListener('DOMContentLoaded', function () {
  const gridSeason = document.querySelectorAll('.grid_s1 > div');

  gridSeason.forEach(function (child, index) {
    child.addEventListener('click', function () {
      const categories = [
        'spring',
        'summer',
        'winter',
        "fall"
      ];
      const category = categories[index];
      window.location.href = `listview.html?Urlinfo=${category}`;
    });
  });
});

