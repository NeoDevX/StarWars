import React, { Component } from 'react';
import SwapiService from '../services/swapi-service';
import { Row } from '../components/row';
import { StarshipsList } from '../components/sw-items/lists';
import { StarshipDetails } from '../components/sw-items/details';
import ErrorBoundry from '../components/error-handler/error-boundry';


export default class StarsipsPage extends Component {
    
    state = {
        selectedStarship: 11
    };

    swapiService = new SwapiService();

    onStarshipSelected = (id) => {
        this.setState({
            selectedStarship: id
        });
    }

    render() {
        const { selectedStarship } = this.state; 

        return (
            <ErrorBoundry>
                <Row>
                    <ErrorBoundry>
                        <StarshipsList onItemSelected={this.onStarshipSelected}/>
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <StarshipDetails itemId={ selectedStarship }/>
                    </ErrorBoundry>
                </Row>
            </ErrorBoundry>
        );
    }
} 