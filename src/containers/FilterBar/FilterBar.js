import { connect } from "redux";
import React, {Component} from 'react';
import Brandfilter from '../Brandfilter';
import PriceRangeFilter from '../PriceRangeFilter';

class FilterBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="col-lg-3">
                <div className="row">
                <div className="col-12">
                    <Brandfilter />
                    <PriceRangeFilter />
                </div>
                </div>
            </div>
        )
    }
    
}
export default FilterBar;