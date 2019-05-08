const ProductDetail = (props) => {
    return (
        <div className="container" style={{padding: '6rem 0'}}>
            <div className="card">
                <div className="row">
                <ProductDetailComponent product={props}/>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail