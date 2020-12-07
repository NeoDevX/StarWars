import React from 'react';
import icon from '../img/error.png';

const Error = () => {
    return (
        <div className="error">
            <img className="error-item error-img" src={ icon } alt="error icon"/>
            <span className="error-item boom">BOOM!</span>
            <span className="error-item">
                Something has gone terribly wrong
            </span>
            <span className="error-item">
                (but we already sent driods to fix it :)
            </span>
        </div>
    );
};

export default Error;