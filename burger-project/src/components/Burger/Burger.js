import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = ( props ) => {
    let transformingridients1=Object.keys(props.ingredients);
    console.log(transformingridients1);
    let transformingridients=Object.keys(props.ingredients)
    .map(igkey => {
            return [...Array(props.ingredients[igkey])].map( (_,i)=>{
                return <BurgerIngredients key={igkey+i} type={igkey}/>;
            });
    }).reduce((arr,el)=>{
            return arr.concat(el);
    },[]);
    if(transformingridients.length===0)
    {
        transformingridients=<p>Add something</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformingridients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;