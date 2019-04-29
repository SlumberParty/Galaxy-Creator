import makePlanet from './make-planet.js';

const planetButtons = document.querySelectorAll('.planet');
const sunImage = document.getElementById('sun');

for(let i = 0; i < planetButtons.length; i++) {
    const planetMaker = planetButtons[i];
    
    planetMaker.addEventListener('click', () => {
        makePlanet(sunImage, planetMaker.value);
        console.log('in event listener');
    });

}

