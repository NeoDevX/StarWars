import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorBoundry from '../error-handler/error-boundry';
import { PlanetView } from './planet-view';
import PropsTypes from 'prop-types';

export default class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        hasError: false
    };

    static defaultProps = {
        updateInterval: 10000
    };

    static propTypes = {
        updateInterval: PropsTypes.number
    }

    swapiService = new SwapiService();

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet, 
            loading: false  
        });
    }

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

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

