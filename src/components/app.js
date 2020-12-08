import React, { Component } from 'react';
import SwapiService from '../services/swapi-service'; 
import './index.css';
import Header from './header';
import RandomPlanet from './random-planet/random-planet';
import ItemList from './item-list';
import { Row } from './row';
import ItemDetails from './item-details/item-details';
import { Record } from './item-details/item-view';
import ErrorBoundry from './error-handler/error-boundry';

export default class App extends Component {
    
    state = {
        hasError: false,
        selectedItem: 1
    };
    
    swapiService = new SwapiService();

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });         
    }


    render() {

        const { getPerson,
            getStarship, 
            getStarshipImage, 
            getPersonImage,
            getAllCharacters 
        } = this.swapiService;

        const itemDetails = (
            <ItemDetails 
                itemId={ 1 }
                getData={ getPerson }
                getImageUrl={ getPersonImage }>

                <Record field="eyeColor" label="Eye Color"/>
                <Record field="gender" label="Gender"/>            
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails 
                itemId={ 5 } 
                getData={ getStarship }
                getImageUrl={ getStarshipImage }>    

                <Record field="model" label="Model"/>
                <Record field="costInCredits" label="Cost"/>
                <Record field="length" label="Length"/>
            </ItemDetails>
        );

        const itemList = (
            <ItemList 
                getData={ getAllCharacters }
                onItemSelected={ () => {} }>
                    
                {
                    ({name, gender}) => `${ name } (${gender})`
                }
            </ItemList>
        );

        return (
            <div className="container">
                <ErrorBoundry>
                    <Header />
                    <RandomPlanet />
                    <Row left={ itemList } right={ itemList }/>
                </ErrorBoundry>
            </div>
        );
    }
}