import React from 'react';
import { Row } from '../components/row';
import { StarshipsList } from '../components/sw-items/lists';
import { StarshipDetails } from '../components/sw-items/details';
import ErrorBoundry from '../components/error-handler/error-boundry';
import { withRouter } from 'react-router-dom';

const StarsipsPage = ({ history,  match: { params: { id } } }) => {
    return (
        <ErrorBoundry>
            <Row>
                <ErrorBoundry>
                    <StarshipsList onItemSelected={ (id) => history.push(id)} />
                </ErrorBoundry>
                <ErrorBoundry>
                    <StarshipDetails itemId={ id }/>
                </ErrorBoundry>
            </Row>
        </ErrorBoundry>
    );
} 

export default withRouter(StarsipsPage);