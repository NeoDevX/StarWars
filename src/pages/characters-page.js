import React from 'react';
import ErrorBoundry from '../components/error-handler/error-boundry';
import { Row } from '../components/row';
import { CharactersList } from '../components/sw-items/lists';
import { PersonDetails } from '../components/sw-items/details';
import { withRouter } from 'react-router-dom';


const CharactersPage = ({ history, match: { params: { id } } }) => {
    return (
        <ErrorBoundry>
            <Row>
                <ErrorBoundry>
                    <CharactersList onItemSelected={ (id) => history.push(id) }/>
                </ErrorBoundry>
                <ErrorBoundry>
                    <PersonDetails itemId={ id }/>
                </ErrorBoundry>
            </Row>
        </ErrorBoundry>
    );
} 

export default withRouter(CharactersPage);