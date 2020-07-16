
const modaloverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        let videoId = card.getAttribute('id')
        modaloverlay.classList.add('active')
        modaloverlay.querySelector("iframe").src= `https://www.youtube.com/embed/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modaloverlay.classList.remove('active')
    modaloverlay.querySelector("iframe").src=""
})