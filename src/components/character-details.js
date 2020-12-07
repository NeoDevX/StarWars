import React, { Component } from 'react';
import SwapiService from '../services/swapi-service';
import Spinner from './spinner/spinner';

export default class PersonDetails extends Component {

    state = {
        person: null,
        loading: true,
    };

    swapiService = new SwapiService();

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.personId !== this.props.personId) {
            this.updatePerson();
        }
    }

    // componentDidCatch() {
    //     this.setState({

    //     })
    // }

    updatePerson() {
        const { personId } = this.props;
        const { loading } = this.state;
        
        this.setState({ 
            loading: !loading 
        });

        if (!personId) { return } 

        this.swapiService.getPerson(personId)
            .then(this.onPersonLoaded);
    }

    onPersonLoaded = (person) => {
        this.setState({ 
            person, 
            loading: false  
        });
    }

    render() {
        const { person, loading } = this.state;

        if (!person) {
            return <span>Select a person from list</span>
        }

        const spinner = loading ?  <Spinner /> : null;
        const content = !loading ? <PersonView person={ person }/> : null;

        if (loading) {
            return <Spinner />;
        }

        return (
            <div className="person-details card">
                { spinner }
                { content }
            </div>
        );
    }
}

const PersonView = ({ person }) => {

    const { id, name, gender, birthYear, eyeColor } = person;

    return (
        <>
            <img src={`https://starwars-visualguide.com//assets/img/characters/${id}.jpg`} 
                alt="person-image"/>
            <div className="person-info">
                <h4>{ name }</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="term">Gender:</span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year:</span>
                        <span>{ birthYear }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye color:</span>
                        <span>{ eyeColor }</span>
                    </li>
                </ul>
            </div>
        </>
    );
}