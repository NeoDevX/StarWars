import React, { Component } from 'react'; 
import './index.css';
import { Header } from './header';
import RandomPlanet from './random-planet/random-planet';
import ErrorBoundry from './error-handler/error-boundry';
import { SwapiProvider } from './swapi-context/swapi-context';
import SwapiService from '../services/swapi-service';
import LocalAPI from '../services/localAPI';
import { CharactersPage, StarshipsPage, PlanetsPage } from '../pages/pages';

export default class App extends Component {
    
    state = {
        hasError: false,
        selectedItem: 1,
        service: new SwapiService()
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });         
    }

    onServiceChange = () => {
        this.setState(({ service }) => {
            const Service = service instanceof LocalAPI ? SwapiService : LocalAPI;

            return {
                service: new Service()
            }
        });
    };

    render() {

        return (
            <div className="container">
                <ErrorBoundry>
                    <SwapiProvider value={ this.state.service }>
                        <Header onServiceChange={ this.onServiceChange }/>
                        
                        <RandomPlanet />
                        
                        <CharactersPage />
                        
                        <StarshipsPage />

                        <PlanetsPage />
                    </SwapiProvider>
                </ErrorBoundry>
            </div>
        );
    }
}