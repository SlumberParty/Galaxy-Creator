import makePlanet from '../src/make-planet.js';
const test = QUnit.test;

test('make planets appear', function(assert) {

    //Arrange
    // Set up your parameters and expectations
    const planetName = 'mercury';
    const mockSun = document.createElement('div');
    const expected = '<span class="part mercury"></span>';

    //Act
    makePlanet(mockSun, planetName);

    // Call the function you're testing and set the result to a const

    //Assert
    const parentInnerHTML = mockSun.innerHTML;
    assert.equal(parentInnerHTML, expected);
});