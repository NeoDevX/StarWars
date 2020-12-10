import React from 'react';

export const ItemList = (props) => {
    const { onItemSelected, itemList, children: renderLabel } = props;
    const items = itemList.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

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

ItemList.defaultProps = {
    onItemSelected: () => {}
}; 