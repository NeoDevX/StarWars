import React, { Component } from 'react';
import ItemList from './item-list';
import PersonDetails from './person-details';
import Error from './error-indicator';

export default class PeoplePage extends Component {
    
    state = {
        selectedPerson: 1,
        hasError: false
    };

    swapiService = new SwapiService();

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {

        if (this.state.hasError) {
            return <Error />;
        }

        return (
            <div className="row mb2 mt-5">
                <div className="col-md-6">
                    <ItemList onItemSelected={ this.onPersonSelected }
                        getData={ this.swapiService.getAllPeople }/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={ this.state.selectedPerson }/>
                </div>
            </div>
        );
    }
} 