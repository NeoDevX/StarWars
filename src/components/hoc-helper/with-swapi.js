import React from 'react';
import { SwapiConsumer } from '../swapi-context/swapi-context';

export const WithSwapi = (methodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapiService) => {
                        const swapiProps = methodsToProps(swapiService);
                        return (
                            <Wrapped {...props} { ...swapiProps }/>
                        );
                    }
                }
            </SwapiConsumer>
        );
    }
};
