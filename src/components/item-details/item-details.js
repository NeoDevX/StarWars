import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import { ItemView } from './item-view';

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: true
    };

    swapiService = new SwapiService();

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData } = this.props;
        const { loading } = this.state;
        
        this.setState({ 
            loading: !loading 
        });

        if (!itemId) { return } 

        getData(itemId)
            .then(this.onItemLoaded);
    }

    onItemLoaded = (item) => {
        this.setState({ 
            item,
            image: this.props.getImageUrl(item),
            loading: false  
        });
    }

    render() {

        const { item, loading, image } = this.state;
        if (!item) {
            return <span>Select item from list</span>
        }

        const spinner = loading ?  <Spinner /> : null;
        const content = !loading ? 
            <ItemView item={ item } image={ image } childs={this.props.children}/> :
            null;

        if (loading) {
            return <Spinner />;
        }

        return (
            <div className="item-details card">
                { spinner }
                { content }
            </div>
        );
    }
}

