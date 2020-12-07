import React, { Component } from 'react';
import SwapiService from '../services/swapi-service'; 
import './index.css';
import Header from './header';
import RandomPlanet from './random-planet';
// import PeoplePage from './people-page';
import ItemList from './item-list';
import Error from './error-indicator';
import PersonDetails from './character-details';

export default class App extends Component {
    
    state = {
        hasError: false,
        selectedPerson: 1,
    };
    
    swapiService = new SwapiService();

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });         
    }

    render() {

        const { hasError } = this.state;

        if (hasError) {
            return <Error />;
        }

        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <div className="row mb2 mt-5">
                    <div className="col-md-6">
                        <ItemList onItemSelected={ this.onPersonSelected }
                        getData={ this.swapiService.getAllCharacters }/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={ this.state.selectedPerson }/>
                    </div>
                </div>

                <div className="row mb2 mt-5">
                    <div className="col-md-6">
                        <ItemList onItemSelected={ this.onPersonSelected }
                            getData={ this.swapiService.getAllStarships }/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={ this.state.selectedPerson }/>
                    </div>
                </div>

                <div className="row mb2 mt-5">
                    <div className="col-md-6">
                        <ItemList onItemSelected={ this.onPersonSelected }
                            getData={ this.swapiService.getAllPlanets }/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={ this.state.selectedPerson }/>
                    </div>
                </div>
            </div>
        );
    }
}