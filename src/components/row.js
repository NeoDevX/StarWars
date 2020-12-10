import React from 'react';

export const Row = ({ children }) => {
    return (
        <div className="row mb2 mt-5">
            <div className="col-md-6">
                { children[0] }
            </div>
            <div className="col-md-6">
                { children[1] }
            </div>
        </div>
    );
};