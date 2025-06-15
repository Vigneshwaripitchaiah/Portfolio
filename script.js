AOS.init({ duration: 1200 });

const experienceBox = document.getElementById("experienceBox");

experienceBox.addEventListener("click", () => {
  experienceBox.classList.toggle("clicked");
});
