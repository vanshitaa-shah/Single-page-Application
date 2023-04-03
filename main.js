// Importing modules
import HomeContent from "./src/Home.js";
import AboutContent from "./src/About.js";
import ImagesContent from "./src/Images.js";
import ServicesContent from "./src/Services.js";

// Variable declaration
const container = document.querySelector(".container");
const contentContainer = document.querySelector(".content-section");

// Routes
const routes = {
  "/Home": HomeContent,
  "/About": AboutContent,
  "/Images": ImagesContent,
  "/Services": ServicesContent,
};

contentContainer.innerHTML = routes["/Home"];
container.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();

    // History API
    window.history.pushState({}, null, `${e.target.href}`);

    // changing the innerHTML using routes
    contentContainer.innerHTML = routes[window.location.pathname];
  }
});
