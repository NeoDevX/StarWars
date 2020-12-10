import React, { Component } from 'react';
import ErrorBoundry from '../components/error-handler/error-boundry';
import SwapiService from '../services/swapi-service';
import { Row } from '../components/row';
import { CharactersList } from '../components/sw-items/lists';
import { PersonDetails } from '../components/sw-items/details';


export default class CharactersPage extends Component {
    
    state = {
        selectedPerson: 1
    };

    swapiService = new SwapiService();

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const {selectedPerson} = this.state; 

        return (
            <ErrorBoundry>
                <Row>
                    <ErrorBoundry>
                        <CharactersList onItemSelected={this.onPersonSelected}/>
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <PersonDetails itemId={ selectedPerson }/>
                    </ErrorBoundry>
                </Row>
            </ErrorBoundry>
        );
    }
} 