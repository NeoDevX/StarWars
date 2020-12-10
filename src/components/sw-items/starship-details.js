import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-view';
import { WithSwapi } from '../hoc-helper/with-swapi';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="costInCredits" label="Cost"/>
            <Record field="length" label="Length"/>       
        </ItemDetails>
    );
}

const methodsToProps = ({ getStarshipImage, getStarship }) => {
    return {
        getData: getStarship,
        getImageUrl: getStarshipImage
    }
};

export default WithSwapi(methodsToProps)(StarshipDetails);