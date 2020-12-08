import React from 'react';
import { WithData } from './hoc-helper/with-data';
import SwapiService from '../services/swapi-service';

const { getAllCharacters } = new SwapiService();
const ItemList = (props) => {
    const { onItemSelected, itemList, children } = props;
    const items = itemList.map((item) => {
        const { id } = item;
        const label = children(item);

        return (
            <li className="list-group-item"
                key={ id }
                onClick={ () => onItemSelected(id) }>
                { label }
            </li>
        );
    });

    return (
        <ul className="item-list list group">
            { items }
        </ul>
    );
}

export default WithData(ItemList, getAllCharacters);