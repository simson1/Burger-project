import React, { Component } from 'react';
import Contactdata from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    componentDidMount ()
    {
        const search = new URLSearchParams(this.props.location.search);
        const inge = {};
        for(let param of search.entries())
        {
            inge[param[0]] = +param[1];
        }
         this.setState({ingredients:inge});
    }
    cancelhandle = () =>{
        this.props.history.goBack();
    }
    successhandle = () => { 
        this.props.history.replace('checkout/contact-data');
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <CheckoutSummary checkoutCancelhandle={this.cancelhandle} checkoutSuccesshandle={this.successhandle} ingredients={this.state.ingredients}/>
                <Route path={this.props.match.url + '/contact-data'}  render={(props) => (<Contactdata inge={this.state.ingredients} {...props}/>)}/>
            </div>
        );
    }
}

export default Checkout;