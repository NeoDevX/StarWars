import React from 'react';
import { PlanetsList } from '../components/sw-items/lists';
import ErrorBoundry from '../components/error-handler/error-boundry';
import { withRouter } from 'react-router-dom';


const PlanetsPage = ({ history }) => { 
    return (
        <ErrorBoundry>
            <ErrorBoundry>
                <PlanetsList onItemSelected={ (id) => history.push(id) }/>
            </ErrorBoundry>
        </ErrorBoundry>
    );
} 

export default withRouter(PlanetsPage);