import React, { Component, lazy } from 'react';
import Spinner from '../spinner/spinner';

export const WithData = (View) => {
    return class extends Component {
        state = {
            itemList: null,
            loading: true
        }
        
        componentDidMount() {
            this.update();
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }
        
        update() {
            this.setState({ 
                loading: true
            });

            this.props.getData()
                .then(this.onItemsLoaded);
        }

        onItemsLoaded = (itemList) => {
            this.setState({ 
                itemList: itemList,
                loading: false  
            });
        }

        render() {
            const { itemList, loading } = this.state;
            const spinner = loading ? <Spinner /> : null;
            const content = !loading ? <View {...this.props} itemList={ itemList }/> : null;
            if (!itemList || loading) {
                return <Spinner />;
            }
            
            return (
                <>
                    { spinner }
                    { content }
                </>
            );
        }
    }
};
