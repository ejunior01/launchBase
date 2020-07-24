const modal = document.querySelector(".modal-overlay");
const iframe = document.querySelector(".modal-iframe iframe");
const cards = document.querySelectorAll(".card-courses");

for (let card of cards) {
  card.querySelector(".button").addEventListener("click", () => {
    modal.classList.add("active");

    if (modal.querySelector(".modal").classList.contains("maximize")) {
      modal.querySelector(".modal").classList.remove("maximize");
    }

    let idCourser = card.getAttribute("id");

    iframe.setAttribute("src", `https://rocketseat.com.br/${idCourser}`);
  });
}

modal.querySelector(".modal .button-close").addEventListener("click", () => {
  modal.classList.remove("active");
  iframe.setAttribute("src", "");
});

modal.querySelector(".modal .button-maximize").addEventListener("click", () => {
  modal.querySelector(".modal").classList.toggle("maximize");
});
