import React from 'react';

export const PlanetView = ({ planet }) => {
    const { name, population, rotationPeriod, diameter, id } = planet;

    return (
        <>
            <img
                src={`https://starwars-visualguide.com//assets/img/planets/${id}.jpg`}
                className="planet-image"
                alt="planet-image"/>
            <div className="planet-info">
                <h3>
                    { name }
                </h3>
                <ul>
                    <li>
                        Population : { population }
                    </li>
                    <li>
                        Rotation Period : { rotationPeriod }
                    </li>
                    <li>
                        Diameter : { diameter }
                    </li>
                </ul>
            </div>
        </>
    );
}