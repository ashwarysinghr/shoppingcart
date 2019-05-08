import React, {Component} from 'react';
import InputRange from 'react-input-range';
import './Price.css';

const PriceRangeComponent = (props) => {
    const {price, handlePriceChange} = props;
    console.log(price);

    return (
        <form className="form">
            <InputRange
                maxValue={5000}
                minValue={0}
                formatLabel={price => `$ ${price}`}
                value={price}
                onChange={handlePriceChange}
                onChangeComplete={price => console.log(price)} />
        </form>
    )
}
export default PriceRangeComponent