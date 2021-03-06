import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import ErrorBoundry from '../error-handler/error-boundry';
import { PlanetView } from './planet-view';
import PropsTypes from 'prop-types';
import {WithSwapi} from '../hoc-helper/with-swapi'

class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        hasError: false
    };

    static defaultProps = {
        updateInterval: 5000
    };

    static propTypes = {
        updateInterval: PropsTypes.number
    }

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
        const { getPlanet } = this.props
        const id = Math.floor((Math.random() * 15) + 2);
        
        getPlanet(id)
            .then(this.onPlanetLoaded)
            .then(this.setState({ loading: false}))
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

const methodsToProps = ({ getPlanet }) => ({getPlanet})

export default WithSwapi(methodsToProps)(RandomPlanet)