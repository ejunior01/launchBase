
const modal = document.querySelector(".modalOverlay")
const cursos = document.querySelectorAll(".curso")
const maximize = modal.querySelector(".modal").classList.contains("maximize")

for (let curso of cursos) {
    curso.addEventListener('click', function(){
        let idCurso = curso.getAttribute("id")
        modal.classList.add('active')
        modal.querySelector("iframe").src = `https://rocketseat.com.br/${idCurso}`
    })
}

modal.querySelector(".modalClose").addEventListener('click', function(){
    modal.classList.remove('active')
    modal.querySelector("iframe").src=""
})

 modal.querySelector('.modalMaximize').addEventListener('click', function(){
    if (!maximize) {
        modal.querySelector(".modal").classList.toggle('maximize')
        console.log("ok")
    }
})

