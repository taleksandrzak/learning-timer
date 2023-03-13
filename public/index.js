const btnStop = document.querySelector('.btn-danger');
const btnStart = document.querySelector('.btn-success');
const pTime = document.querySelector('.pTime');
const topDiv = document.querySelector('.topDiv')



btnStop.addEventListener('click', () => {
    pTime.textContent = 'Bartosz Aleksandrzak'
})
btnStart.addEventListener('click', () => {
    topDiv.classList.toggle('redBack')
})