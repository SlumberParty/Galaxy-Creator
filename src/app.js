// import makePlanet from './make-planet.js';

function makePlanet(mockSun, planetName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(planetName);

    mockSun.appendChild(span);
}

const planetButtons = document.querySelectorAll('.planet');
const sunImage = document.getElementById('sun');

for(let i = 0; i < planetButtons.length; i++) {
    const planetMaker = planetButtons[i];
    
    planetMaker.addEventListener('click', () => {
        makePlanet(sunImage, planetMaker.value);
        console.log('in event listener');
    });

}

