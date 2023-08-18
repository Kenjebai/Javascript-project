// modal

const modalTrigger = document.querySelector('#btn-get')
const modal = document.querySelector('.modal')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()

closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if(event.target === modal){
        closeModal()
    }
}

const interval = setInterval(openModal, 10000)
setTimeout(() => {
    clearInterval(interval)
}, 11000)

let body = document.body.scrollHeight
let height = window.innerHeight

window.addEventListener("scroll", func)

function func(){
    if (document.body.scrollTop >= body - height || document.documentElement.scrollTop >= body - height) {
        openModal()
        window.removeEventListener('scroll', func)

    }
}

