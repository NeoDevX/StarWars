import React, { Component } from 'react'; 
import './index.css';
import { Header } from './header';
import RandomPlanet from './random-planet/random-planet';
import ErrorBoundry from './error-handler/error-boundry';
import { SwapiProvider } from './swapi-context/swapi-context';
import SwapiService from '../services/swapi-service';
import LocalAPI from '../services/localAPI';
import { CharactersPage, StarshipsPage, PlanetsPage } from '../pages/pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PlanetDetails } from './sw-items/details';

export default class App extends Component {
    
    state = {
        hasError: false,
        service: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ service }) => {
            const Service = service instanceof LocalAPI ? SwapiService : LocalAPI;
    
            return {
                service: new Service()
            }
        });
    };

    render() {

        const mainView = (
            <>
                <h2 className="mt-4">Welcome to Star Wars!</h2>
                <p>This site was created just to learn react</p>
            </>
        );
        const status404 = (
            <h1 className="mt-5">Page not Found</h1>
        );

        return (
            <div className="container">
                <ErrorBoundry>
                    <SwapiProvider value={ this.state.service }>
                        <Router>
                            <Header onServiceChange={ this.onServiceChange }/>
                            <RandomPlanet />
                            <Switch>
                                <Route path='/' render={() => mainView} exact/>
                                <Route path="/characters/:id?" component={ CharactersPage }/>
                                <Route path="/starships/:id?" component={ StarshipsPage }/>
                                <Route path="/planets" exact component={ PlanetsPage }/>
                                <Route path='/planets/:id'
                                    render={ ({ match: { params: { id } } }) => {
                                        return <PlanetDetails itemId={ id }/> 
                                }}/>
                                <Route render={ () => status404 }/>
                            </Switch>
                        </Router>
                    </SwapiProvider>
                </ErrorBoundry>
            </div>
        );
    }
}