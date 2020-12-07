import React, { Component } from 'react';
import SwapiService from '../services/swapi-service';
import Spinner from './spinner/spinner';
import Error from './error-indicator';

export default class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        isError: false
    };

    swapiService = new SwapiService();

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet, 
            loading: false  
        });
    }

    componentDidMount() {
        this.updatePlanet();
        // this.interval = setInterval(this.updatePlanet, 5000);
    };

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    onError = () => {
        this.setState({
            isError: true,
            loading: false
        });
    }

    updatePlanet = () => {
        const id = Math.floor((Math.random() * 17) + 2);
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, isError } = this.state;
        const errorMessage = isError ? <Error /> : null;
        const spinner = loading ?  <Spinner /> : null;
        const content = !loading && !isError ? <PlanetView planet={ planet }/> : null;

        if (loading) {
            return <Spinner />
        }

        return (
            <div className="random-planet">
                { errorMessage } 
                { spinner }
                { content }
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { name, population, rotationPeriod, diameter, id } = planet;

    return (
        <>
            <img
                src={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`}
                className="planet-image"
                alt="planet-image"/>
            <div className="planet-info">
                <h3>
                    { name }
                </h3>
                <ul>
                    <li>
                        Population : { population }
                    </li>
                    <li>
                        Rotation Period : { rotationPeriod }
                    </li>
                    <li>
                        Diameter : { diameter }
                    </li>
                </ul>
            </div>
        </>
    );
}