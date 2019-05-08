import { connect } from "react-redux";
import React, {Component} from 'react';
import {fetchProducts} from '../../actions/products';
import { bindActionCreators } from 'redux';
import Product from "../../components/Product/Product";
import {brandFilterPipe} from '../../Pipes/brandFilterPipe';
import {priceFilterPipe} from '../../Pipes/priceFilterPipe';
import Modal from "../../containers/Modal/Modal";

class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:'',
            showModal: false
        }
        this.showConfirmationMessage = this.showConfirmationMessage.bind(this);
    }

    componentDidMount(){
        const { fetchProducts } = this.props.actions;
        fetchProducts();
    }
    showConfirmationMessage(param){
        this.setState({ showModal: true, message:param }, function() {
           this.hideConfirmationMessage()
          });
    }
    hideConfirmationMessage(){
        let {showModal} = this.state;
        if(showModal){
            setTimeout(() => {
                this.setState({
                    showModal:!showModal,
                    message:''
                })
            }, 2000);
        }
    }

    render(){
        const {products, cart} = this.props;
        const { showModal, message } = this.state;
        
        return (
            <div className="col-lg-9">
                <div className="row">
                    {
                        products ? products.map((product, index) => {
                            return (
                            <Product key={product.id} data={product} 
                                showConfirmationMessage={this.showConfirmationMessage}/> 
                        )}) : <h1>No Data</h1>
                    }
                </div>
                <Modal header="My Modal"
                    open={showModal}>
                        {message}
                </Modal>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    const brands = state.brandfilters.selectedBrands;
    const price = state.pricefilters.price;
    const filterByBrandArr = brandFilterPipe(state.shop.products, brands)
    const filterByPrice = priceFilterPipe(filterByBrandArr, price)
    return {products: filterByPrice, cart: state.shop.cart }
};
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators({
        fetchProducts
      }, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);