export const formatCurrency = (currency) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      
    return formatter.format(currency); /* $2,500.00 */
    // return (currency).toFixed(2).repla/ce(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}