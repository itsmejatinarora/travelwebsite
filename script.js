document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        hamburger.classList.toggle("active");
    });
});



function searchDestination() {
    const input = document.getElementById("searchInput").value;
    if (input) {
        alert("Searching for: " + input);
    } else {
        alert("Please enter a destination.");
    }
}
