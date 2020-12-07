export default class SwapiService {

    BASEURL = 'https://swapi.dev/api';

    getData = async (url) => {
        const response = await fetch(`${this.BASEURL}/${url}`);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        return await response.json();
    }

    getAllCharacters = async () => {
        const res = await this.getData('people/');
        return res.results.map(this._transformPersonData);
    }

    getPerson = async (id) => {
        const person = await this.getData(`people/${id}`);
        return this._transformPersonData(person);
    }

    getAllPlanets = async () => {
        const res = await this.getData('planets/');
        return res.results.map(this._transformPlanetData);
    }

    getPlanet = async (id) => {
        const planet = await this.getData(`planets/${id}`);
        return this._transformPlanetData(planet);
    }

    getAllStarships = async () => {
        const res = await this.getData('starships/');
        return res.results.map(this._transformStarshipData);
    }

    getStarship = async (id) => {
        const starship = await this.getData(`starships/${id}`);
        return this._transformStarshipData(starship);
    }

    _getId(item) {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    _transformPlanetData = (planet) => {
        const { name, population, rotation_period: rotationPeriod, diameter } = planet;

        return {
            id: this._getId(planet),
            name,
            population,
            rotationPeriod,
            diameter
        }
    }

    _transformPersonData = (person) => {
        const { name, gender, birth_year: birthYear, eye_color: eyeColor } = person;

        return {
            id: this._getId(person),
            name,
            gender,
            birthYear,
            eyeColor
        }
    }

    _transformStarshipData = (starship) => {
        const { name, model, manufacturer, costInCredits, length, 
            crew, passengers, cargoCapacity } = starship;

        return {
            id: this._getId(starship),
            name,
            model,
            manufacturer,
            costInCredits,
            length,
            crew,
            passengers,
            cargoCapacity
        }
    }

}