import HomeContent from "./src/Home.js";
import AboutContent from "./src/About.js";
import ImagesContent from "./src/Images.js";
import ServicesContent from "./src/Services.js";

const container = document.querySelector(".container");
const contentContainer = document.querySelector(".content-section");
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
    window.history.pushState({}, null, `${e.target.href}`);
    console.log(window.history.length);
    console.log(routes[window.location.pathname]);
    contentContainer.innerHTML = routes[window.location.pathname];
  }
});

// window.addEventListener("load", () => {
//   if (location.href !== "http://127.0.0.1:5500/")
//     location.href = "http://127.0.0.1:5500/";
//   // alert("yes");
// });
