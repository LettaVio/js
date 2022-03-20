const timerBlock = document.querySelector('.timer__time')
const daedLine = '31 march 2022'
let interval

const updateClock = () => {
    const date = new Date().getTime()
    const dateDeadLine = new Date(daedLine).getTime()
    const timeRemaining = (dateDeadLine - date) / 1000

    const days = Math.floor(timeRemaining / 60 / 60 / 24)
    const hours = Math.floor((timeRemaining / 60 / 60) % 24)
    const minutes = Math.floor((timeRemaining / 60) % 60)
    const sec = Math.floor(timeRemaining % 60)

    const fDays = days < 10 ? '0' + days : days
    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSec = sec < 10 ? '0' + sec : sec

    timerBlock.textContent = `${fDays }:${fHours }:${fMinutes}:${fSec}`
    if (timeRemaining <= 0) {
        clearInterval(interval)
        timerBlock.textContent = "00:00:00:00"
    }

}

updateClock()

interval = setInterval(updateClock, 500)