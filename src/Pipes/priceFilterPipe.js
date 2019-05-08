export const priceFilterPipe = (products, price) => {
    const {min, max} = price;
    return products.filter((product) => {
        return (product.price > min && product.price < max)
    });
};