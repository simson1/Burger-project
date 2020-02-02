import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
class Orders extends Component {
    
    constructor (props)
    {
        super(props);
        this.state = {
            orders: [],
            loading: true
        }
        axios.get('/orders.json')
        .then ( response => { 
            const orders1=Object.keys(response.data)
            .map( (igKey) => { return response.data[igKey]; });
            this.setState({orders:orders1})
            console.log(this.state.orders);
        });
    }
    render () {
        let compo=this.state.orders.map( (num) => { 
            return <Order ingredients={num.ingridiends}/>});
        return (
            <div>
                    {compo}
            </div>
        );
    }
}

export default Orders;