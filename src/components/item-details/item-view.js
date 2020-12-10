import React, { Children, cloneElement } from 'react';

export const Record = ({ item, field, label }) => {
    return (
        <li>
            { label } : { item[field] }
        </li>
    );
};

export const ItemView = ({ item, image, childs }) => {

    const { name } = item;
    
    return (
        <>
            <img src={ image } 
                alt="item-image"/>
            <div className="item-info">
                <h4>{ name }</h4>
                <ul>
                    { 
                        Children.map(childs, (child) => {
                            return cloneElement(child, { item });
                        })
                    }
                </ul>
            </div>
        </>
    );
};