import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ onServiceChange  }) => {
    return (
        <div className="header d-flex">
            <h2>
                <Link to='/'>Star Wars</Link>
            </h2>
            <ul>
                <li>
                    <Link to='/characters/'>Characters</Link>
                </li>
                <li>
                    <Link to='/planets/'>Planets</Link>
                </li>
                <li>
                    <Link to='/starships/'>Starships</Link>
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