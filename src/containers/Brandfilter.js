import { connect } from "react-redux";
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import Brand from "../components/Brands/Brand";
import {fetchBrands, addBrandToFilter, removeBrandFromFilter} from '../actions/filters';

class Brandfilter extends Component{
    constructor(props){
        super(props);
        this.handleSelectBox = this.handleSelectBox.bind(this);
    }

    handleSelectBox(e){
        const brand = e.target.name;
        const checkStatus = e.target.checked;
        if(checkStatus){
            this.props.actions.addBrandToFilter(brand);
        } else {
            this.props.actions.removeBrandFromFilter(brand);
        }
    }
    componentDidMount(){
        const { fetchBrands } = this.props.actions;
        fetchBrands();
    }

    render(){
        const {brands} = this.props;
        console.log(brands);
        return (
           <div className="card mb-3">
                <div className="card-header">
                    <h3>Brands</h3>
                </div>
                <ul className="list-group flex-row flex-wrap">
                    {brands.map((item, index) => (
                        <Brand key={index} data={item} handleSelectBox={this.handleSelectBox}/>
                    ))}
                </ul>
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
        fetchBrands, addBrandToFilter, removeBrandFromFilter
      }, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Brandfilter);