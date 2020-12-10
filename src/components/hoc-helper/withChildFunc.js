import React from 'react';

export const WithChildFunction = (func) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {func}
            </Wrapped>
        );
    }
};