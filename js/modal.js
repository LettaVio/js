const modalButtons = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const modalClose = document.querySelector('.modal__close')


modalButtons.forEach((modalButton) => {
    modalButton.addEventListener('click', (event) => {
        modal.classList.remove('hidden')
    })
})


overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
})

modalClose.addEventListener('click', () => {
    modal.classList.add('hidden')
})