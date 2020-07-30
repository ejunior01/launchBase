const descriptions = document.querySelectorAll(".description");

for (description of descriptions) {
  let showHidden = description.querySelector("span")
  let showDescription = description.querySelector(".description-info")

    showHidden.addEventListener('click', function(){
      showDescription.classList.toggle("hidden")
      showHidden.innerText == "Mostrar"? showHidden.innerText = "Esconder": showHidden.innerText = "Mostrar"
    })
}
