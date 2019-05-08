import { connect } from "react-redux";
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import PriceRangeComponent from "../components/Price/Price";
import {changePrice} from '../actions/filters';

class PriceRangeFilter extends Component{
    constructor(props){
        super(props);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.state = {
            price:{
                min:0,
                max:5000
            }
        }
    }

    handlePriceChange(value){
        const {min, max} = value;
        let {min : prevMin, max:prevMax}= this.state.price;
        let priceToUpdate, propToUpdate;
        if(min != prevMin){
            priceToUpdate = min;
            propToUpdate = 'min'
        }
        if(max != prevMax){
            priceToUpdate = max;
            propToUpdate = 'max'
        }
        let price = {...this.state.price, [propToUpdate]:priceToUpdate}
        this.setState({
            price:price
        }, () => {
            console.log(this.state.price)
            this.props.actions.changePrice(price)
        });
    }
   
    render(){
        const {price} = this.state;
        return (
           <div className="card mb-3">
                <div className="card-header">
                    <h3>Price</h3>
                </div>
                <PriceRangeComponent handlePriceChange={this.handlePriceChange} price={price}/>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {brands: state.brandfilters.brands }
};
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators({
        changePrice
      }, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(PriceRangeFilter);