import React, { Component } from 'react';
import ItemList from '../components/item-list';
import ItemDetails from '../components/item-details/item-details';
import ErrorBoundry from '../components/error-handler/error-boundry';
import SwapiService from '../services/swapi-service';
import { Row } from '../components/row';


export default class PeoplePage extends Component {
    
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

        const itemList = (
            <ItemList 
                onItemSelected={ this.onPersonSelected }
                getData={ this.swapiService.getAllCharacters }>

                { 
                    ({name, gender}) => `${name} ( ${gender} )` 
                }
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={ this.state.selectedPerson }/>
            </ErrorBoundry>
        );

        return (
            <Row left={ itemList } right={ personDetails }/>
        );
    }
} 