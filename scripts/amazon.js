/*const a=[
{
  image:'images/products/athletic-cotton-socks-6-pairs.jpg',
  name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating:{
    stars:4.5,
    count:87,

  },
  priceCent:1090

},
{
  image:'images/products/intermediate-composite-basketball.jpg',
  name:'Intermediate Size Basketball',
  rating:{
    stars:4,
    count:127,

  },
  priceCent:2095

},
{
  image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name:'Adults Plain Cotton T-Shirt - 2 Pack',
  rating:{
    stars:4.5,
    count:56,

  },
  priceCent:799

},
{
  image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name:'Adults Plain Cotton T-Shirt - 2 Pack',
  rating:{
    stars:4.5,
    count:56,

  },
  priceCent:799
}
]*/

import {cart} from '../data/cart.js';
import {products} from '../data/products.js';


let html='';
products.forEach(element => {

  html+=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${element.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${element.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${element.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${element.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(element.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"data-product-id="${element.id}"
          >
            Add to Cart
          </button>
        </div>`

  
});

document.querySelector('.products-grid').innerHTML=html;

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click', () => {
    
    const productId=button.dataset.productId;
    //console.log(productId);
    let matchingId;
    cart.forEach(Id => {
      if (productId===Id.productId){
        matchingId=Id;
    }
   
    }); 
    if(matchingId){
      matchingId.quantity+=1;
    }
    else{
      cart.push({
        productId:productId,
        quantity:1
  
      })
    }
     
    //console.log(cart)   
    //learnt more about objects and arrays and also about loops
    let whole_quantity=0;
    cart.forEach(element => {
      whole_quantity+=element.quantity;
    });
    //console.log(whole_quantity)
    document.querySelector('.cart-quantity').innerHTML=whole_quantity;

  })

})