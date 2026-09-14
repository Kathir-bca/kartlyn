import { cart, addToCart } from '../data/cart.js';
import { products, loadProducts } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

// Rendering Products
loadProducts(renderProductsGrid);

function renderProduct(product) {
    return `
        <div class="product-container js-product-container-${product.id}">
            <div class="product-image-container">
            <img class="product-image" src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars" src="${product.getStarUrl()}">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
                ${product.getPrice()}
            </div>

            <div class="product-quantity-container js-product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
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
            <div class = "product-other-info">
                ${product.getFeatureInfo()}
                ${product.getWarranty()}
            </div>
            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = "${product.id}">
            Add to Cart
            </button>
      </div> `;
}

function renderProductsGrid() {

    let productsHTML = '';

    products.forEach((product) => {

        productsHTML += renderProduct(product);

    });

    document.querySelector('.js-products-grid').innerHTML = productsHTML;

    updateCartQuantity();

    // to update card quantity

    function updateCartQuantity() {
        let cartQuantity = 0;
        cart.forEach((cartItem) => {

            cartQuantity += cartItem.quantity;
        })

        let showCartQuantity = document.querySelector('.js-cart-quantity');
        showCartQuantity.textContent = cartQuantity;
        document.querySelector('.js-cart-quantity-mobile').textContent = cartQuantity

    }

    document.querySelectorAll('.js-add-to-cart')
        .forEach((button) => {

            button.addEventListener('click', () => {

                const productId = button.dataset.productId;
                const selectedQuantity = selectedCartQuantityInOption(productId);
                products.forEach((product) => {
                    if (product.id === productId) {
                        if (product.stock === 'unavailable') {
                            alert(`Product didn't available in Stock`);
                        } else {
                            addToCart(productId, selectedQuantity);
                            updateCartQuantity();
                            showAdded(productId);
                        }
                    }
                })

            });
        });


    function showAdded(productId) {
        const addedProductId = document.querySelector(`.js-product-container-${productId}`)
        addedProductId.classList.add('js-show-added');
        setTimeout(() => {
            addedProductId.classList.remove('js-show-added');
        }, 4000);
    }


    function selectedCartQuantityInOption(productId) {
        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
        const selectedQuantity = quantitySelector.options[quantitySelector.selectedIndex].value;
        return Number(selectedQuantity);
    }

}


//hamburger menu for mobile

let menu = document.querySelector('.menu-dropdown');
let isOpen = false;
document.querySelector('.js-mobile-right-section').addEventListener('click', () => {

    if (!isOpen) {
        menu.classList.add('menu-dropdown-show');
        isOpen = true;

    } else {
        menu.classList.remove('menu-dropdown-show');
        isOpen = false;
    }
})



// FOR SEARCHING PRODUCT 


const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchButton');

function searchProduct() {

    const query = searchInput.value.trim().toLowerCase();
    // const regex = new RegExp(`\\b${query}\\b`,'i')
    console.log(query);
    const result = products.filter((product) => {
        const searchText = `
                ${product.name}
                ${product.type}
                ${product.keywords}
                ${product.stock}
            `.toLowerCase();

        let searchContainer = document.querySelector('#searchedProduct');
        let searchedProduct = '';

        if (searchText.includes(query)) {
            console.log(product);

            searchContainer.classList.remove('js-products-grid');
            searchedProduct += renderProduct(product);
            searchContainer.innerHTML = searchedProduct;
        }
        

    });

}

searchInput.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        searchProduct();
    }

});

searchBtn.addEventListener('click', () => {

    searchProduct();

});


//  {
//     "id": "d62a4f97-81c5-43be-9057-26e318ca740b",
//     "image": "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     "name": "Adults Plain Cotton T-Shirt - 2 Pack",
//     "rating": {
//       "stars": 4.5,
//       "count": 56
//     },
//     "priceCents": 799,
//     "keywords": [
//       "tshirts",
//       "apparel",
//       "mens"
//     ],
//     "type": "clothing",
//     "sizeChartLink": "images/clothing-size-chart.png",
//     "stock": "unavailable"
//   },
//   {
//     "id": "c94a7e21-35f8-46bd-a062-81ce5274b903",
//     "image": "images/products/realme.png",
//     "name": "Realme 10 Pro 5G (Nebula Blue, 128 GB)",
//     "rating": {
//       "stars": 4.5,
//       "count": 184
//     },
//     "priceCents": 21005,
//     "keywords": [
//       "smartphone",
//       "mobile",
//       "realme",
//       "5g",
//       "electronics"
//     ],
//     "stock": "unavailable"
//   },