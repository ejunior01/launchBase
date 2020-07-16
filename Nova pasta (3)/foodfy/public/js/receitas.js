
const modal = document.querySelector(".modal-overlay")
const recipes = document.querySelectorAll(".recipe")
const body = document.querySelector("body")

for (let recipe of recipes) {
    recipe.addEventListener('click', () => {
        modal.querySelector("h3").innerHTML = recipe.querySelector("h3").innerHTML

        modal.querySelector("p").innerHTML = recipe.querySelector("p").innerHTML

        modal.querySelector("img").src = recipe.querySelector("img").src

        body.classList.add("hidden")
        modal.classList.add("active")
    })
}

modal.querySelector(".modal-close").addEventListener('click', () => {
    modal.classList.remove("active")
    body.classList.remove("hidden")
})

