import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.7,
	cheese: 0.8,
	meat: 1.2
}

class BurgerBuilder extends Component {
	
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	}

	addIngredientsHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		})
	}
	
	lessIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if(oldCount <= 0) { 
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
		...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount;
		const priceSubtract = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceSubtract;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		})
	}
	
	render() {
		const disableInfo = {
			...this.state.ingredients
		};
		
		for(let key in disableInfo) {
			disableInfo[key] = disableInfo[key] <= 0
			console.log(disableInfo[key])
		}
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls 
					addIngredient={this.addIngredientsHandler} 
					lessIngredient={this.lessIngredientHandler}
					disabledProperty={disableInfo} />
			</Aux>
		);
	}
}

export default BurgerBuilder;