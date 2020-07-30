
const modaloverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        let videoId = card.getAttribute('id')
        window.location.href = `/video?id=${videoId}`
    })
}
