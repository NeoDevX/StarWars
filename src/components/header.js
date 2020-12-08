import React, { Component } from 'react';

export default class Header extends Component {
    render() {
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
                </ul>
            </div>
        );
    }
}