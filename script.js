/*document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.querySelector('.menu-toggle');
    var menu = document.querySelector('nav ul.menu');

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
*/
function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


  /*function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
        document.querySelector('.menu-toggle').style.display = 'none'; // Hide the menu toggle symbol
    }
}*/
