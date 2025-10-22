function showQuantity (){
  console.log(`Items in cart: ${cartCount}`);

}
function addItem (){
  
  cartCount ++;
  console.log(`Items in cart: ${cartCount}`);

}
function addItems (){
  cartCount += 3;
  console.log(`Items in cart: ${cartCount}`);

}
let cartCount = 0;