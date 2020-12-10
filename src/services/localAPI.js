import planet from '../img/planet.jpg';
import starship from '../img/starship.jpg';
import person from '../img/person.jpg';

export default class LocalAPI {
    
    _characters = [
        {
            id: 1,
            name: "Luke TEST",
            eyeColor: "brown",
            gender: "male",
            birthYear: "2300"
        }
    ];

    _starships = [
        {
            id: 1,
            name: "Type-54 TEST",
            model: "t-54",
            costInCredits: "121212",
            length: "121212"
        }
    ];

    _planets = [
        {
            id: 1,
            name: "Pluton TEST",
            population: "121212",
            rotationPeriod: "121212",
            diameter: "121212"
        }
    ];

    getAllCharacters = async () => {
        return this._characters;
    }

    getPerson = async () => {
        return this._characters[0];
    }

    getAllStarships = async () => {
        return this._starships;
    }

    getStarship = async () => {
        return this._starships[0];
    }

    getAllPlanets = async () => {
        return this._planets;
    }

    getPlanet = async () => {
        return this._planets[0];
    }

    getPersonImage = () => {
        return person;
    }

    getStarshipImage = () => {
        return starship;
    }

    getPlanetImage = () => {
        return planet;
    }
}