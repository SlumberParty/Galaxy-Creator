function makePlanet(mockSun, planetName) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(planetName);

    mockSun.appendChild(span);
}

export default makePlanet;