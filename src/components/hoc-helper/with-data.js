import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

export const WithData = (View, getData) => {
    return class extends Component {
        state = {
            ItemList: null
        }

        componentDidMount() {
            getData()
                .then((itemList => {
                    this.setState({ itemList });
                }));
        }
        
        render() {
            const { itemList } = this.state;

            if (!itemList) {
                return <Spinner />
            }
            
            return (
                <View {...this.props} itemList={ itemList }/>
            );
        }
    }
};
