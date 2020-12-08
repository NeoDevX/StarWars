import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorBoundry from '../error-handler/error-boundry';
import { PlanetView } from './planet-view';

export default class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        hasError: false
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

    componentDidCatch() {
        this.setState({
            hasError: true,
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
        const { planet, loading, hasError } = this.state;
        const spinner = loading ?  <Spinner /> : null;
        const content = !loading && !hasError ? <PlanetView planet={ planet }/> : null;

        if (loading) {
            return <Spinner />
        }

        return (
            <ErrorBoundry> 
                <div className="random-planet">
                    { spinner }
                    { content }
                </div>
            </ErrorBoundry>
        );
    }
}

