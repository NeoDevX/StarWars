import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-view';
import { WithSwapi } from '../hoc-helper/with-swapi';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population"/>
            <Record field="diameter" label="Diameter"/>            
            <Record field="rotationPeriod" label="Rotation period"/>            
        </ItemDetails>
    );
}

const methodsToProps = ({ getPlanetImage, getPlanet }) => {
    return {
        getData: getPlanet,
        getImageUrl: getPlanetImage
    }
};

export default WithSwapi(methodsToProps)(PlanetDetails);