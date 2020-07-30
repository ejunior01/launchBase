const modal = document.querySelector(".modal-overlay");
const iframe = document.querySelector(".modal-iframe iframe");
const cards = document.querySelectorAll(".card-courses");

for (let card of cards) {
  card.querySelector(".button").addEventListener("click", () => {
    let idCourser = card.getAttribute("id")
    window.location.href = `/courses/${idCourser}`
  });
}