function renderTheme(theme) {
  document.getElementById('theme').textContent = "This weeks' theme is: " + theme;
}

document.addEventListener('DOMContentLoaded', function() {
    renderTheme("drinks");
});
