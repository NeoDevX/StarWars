import { WithData, WithSwapi, WithChildFunction, Compose } from '../hoc-helper/helpers';
import { ItemList } from '../item-list';

const renderName = ({ name }) => `${name}`;

const personMethodsToProps = ({ getAllCharacters }) => {
    return {
        getData: getAllCharacters
    }
};

const planetMethodsToProps = ({ getAllPlanets }) => {
    return {
        getData: getAllPlanets
    }
};

const starshipMethodsToProps = ({ getAllStarships }) => {
    return {
        getData: getAllStarships
    }
};

const CharactersList = Compose( 
                            WithSwapi(personMethodsToProps),
                            WithData,
                            WithChildFunction(renderName)
                        )(ItemList);

const PlanetsList = Compose(
                        WithSwapi(planetMethodsToProps),
                        WithData,
                        WithChildFunction(renderName)
                    )(ItemList);

const StarshipsList = Compose(
                        WithSwapi(starshipMethodsToProps),
                        WithData,
                        WithChildFunction(renderName)
                    )(ItemList);

export { CharactersList, PlanetsList, StarshipsList };