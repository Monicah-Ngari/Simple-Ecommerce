function showQuantity (){
  console.log(`Items in cart: ${cartCount}`);

}
function addCart(){
    cartCount ++;
  console.log(`Items in cart : ${cartCount}`);
  
}
function addItem (){
  
  cartCount +=2;
  console.log(`Items in cart: ${cartCount}`);

}
function addItems (){
  cartCount += 3;
  console.log(`Items in cart: ${cartCount}`);

}
function removeItems (){
  console.log(`Removing items from cart`);
  console.log(`Items removed from the Cart: ${cartCount}`);
  console.log(`Items in cart: ${cartCount}`);
}

let cartCount = 0;