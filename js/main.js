const foxImg = document.querySelector('#fox')
const foxSays = new Audio('../audio/fox.mp3');
const notFoxImg = document.getElementById('notFox');

foxImg.addEventListener('click', () => {
    foxSays.volume = .01;
    foxSays.play();
    foxSays.currentTime = 0;
})

notFoxImg.addEventListener('click', event => {
    if (event.target.id !== 'notFox') {
        const audioElement = new Audio(`../audio/${event.target.id}.mp3`)
        audioElement.volume = .05
        audioElement.play();
    }
})