import React from 'react';
import ItemDetails from '../item-details/item-details';
import { Record } from '../item-details/item-view';
import { WithSwapi } from '../hoc-helper/with-swapi';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="birthYear" label="BirthYear"/>
            <Record field="eyeColor" label="Eye Color"/>
            <Record field="gender" label="Gender"/>            
        </ItemDetails>
    );
}

const methodsToProps = ({ getPersonImage, getPerson }) => {
    return {
        getData: getPerson,
        getImageUrl: getPersonImage
    }
};

export default WithSwapi(methodsToProps)(PersonDetails);