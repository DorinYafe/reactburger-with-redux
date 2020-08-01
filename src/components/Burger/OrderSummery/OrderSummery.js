import React, { Component } from 'react';
import Auxx from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummery extends Component {

    // componentWillUpdate() {
    //     console.log('[ingredientSummery] will update');
    // }

    render() {

        const ingredientSummery = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                )
            });

        return (
            <Auxx>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummery}
                </ul>
                <p>Continue to checkout?</p>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxx>
        );
    }
}
export default OrderSummery;