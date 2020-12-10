import React from 'react';

export const Header = ({ onServiceChange  }) => {
    return (
        <div className="header d-flex">
            <h2>
                <a>Star Wars</a>
            </h2>
            <ul>
                <li>
                    <a>Characters</a>
                </li>
                <li>
                    <a>Planets</a>
                </li>
                <li>
                    <a>Starships</a>
                </li>
                <button 
                    className="btn btn-success btn-sm"
                    onClick={ onServiceChange }>
                    Change API
                </button>
            </ul>
        </div>
    );
}