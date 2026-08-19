
// NEW ARRIVAL PRODUCTS


const newProducts = [

    {
        id: 1,

        name: "Apple iPhone 15 (128 GB) Black",

        image: "images/iphone-15.png",

        price: 79900,

        rating: 4.8,

        date: 6,

        discount: 10
    },


    {
        id: 2,

        name: "The Souled Store Graphic Printed T-Shirt",

        image: "images/new-tshirt.png",

        price: 849,

        rating: 4.6,

        date: 5,

        discount: 15
    },


    {
        id: 3,

        name: "Apple AirPods Pro (2nd Generation)",

        image: "images/new-airpods.png",

        price: 24900,

        rating: 4.7,

        date: 4,

        discount: 12
    },


    {
        id: 4,

        name: "Puma Court Classic Vulc Sneakers",

        image: "images/new-puma-shoes.png",

        price: 2799,

        rating: 4.5,

        date: 3,

        discount: 20
    },


    {
        id: 5,

        name: "Noise ColorFit Pro 5 Smart Watch",

        image: "images/new-noisefit5.png",

        price: 3499,

        rating: 4.6,

        date: 2,

        discount: 18
    },


    {
        id: 6,

        name: "VIP Streak 55cm Hard Trolley",

        image: "images/new-trolley.png",

        price: 3999,

        rating: 4.4,

        date: 1,

        discount: 25
    },


    // ==================================================
    // ADDITIONAL PRODUCTS
    // ==================================================

    {
        id: 7,

        name: "Samsung Galaxy S25 Smartphone",

        image: "images/samsung-s25.png",

        price: 74999,

        rating: 4.8,

        date: 7,

        discount: 8
    },


    {
        id: 8,

        name: "Sony Wireless Noise Cancelling Headphones",

        image: "images/sony-headphone2.png",

        price: 8999,

        rating: 4.7,

        date: 8,

        discount: 20
    },


    {
        id: 9,

        name: "boAt Airdopes True Wireless Earbuds",

        image: "images/new-boat-air.png",

        price: 1299,

        rating: 4.5,

        date: 9,

        discount: 15
    },


    {
        id: 10,

        name: "Adidas Men's Running Shoes",

        image: "images/adidas-shoes.png",

        price: 3599,

        rating: 4.6,

        date: 10,

        discount: 18
    },


    {
        id: 11,

        name: "Samsung 55 Inch Smart LED TV",

        image: "images/samsung-tv.png",

        price: 42999,

        rating: 4.7,

        date: 11,

        discount: 25
    },


    {
        id: 12,

        name: "Logitech Wireless Keyboard",

        image: "images/logitech-keyboard.png",

        price: 1499,

        rating: 4.4,

        date: 12,

        discount: 20
    }

];


// ======================================================
// DOM ELEMENTS
// ======================================================

const productsGrid =
    document.getElementById("productsGrid");

const sortProducts =
    document.getElementById("sortProducts");

const exploreButton =
    document.getElementById("exploreButton");


// ======================================================
// FORMAT INDIAN PRICE
// ======================================================

function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(price);

}


// ======================================================
// CREATE STARS
// ======================================================

function createStars(rating) {

    const fullStars =
        Math.floor(rating);

    const emptyStars =
        5 - fullStars;


    return (
        "★".repeat(fullStars) +
        "☆".repeat(emptyStars)
    );

}


// ======================================================
// CREATE PRODUCT CARD
// ======================================================

function createProductCard(product) {

    const card =
        document.createElement("article");


    card.className =
        "product-card";


    card.innerHTML = `

        <!-- New Badge -->

        <span class="new-badge">

            NEW

        </span>


        <!-- Wishlist -->

        <button
            class="wishlist"
            aria-label="Add to wishlist"
        >

            ♡

        </button>


        <!-- Product Image -->

        <div class="product-image">

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

        </div>


        <!-- Product Name -->

        <h3 class="product-name">

            ${product.name}

        </h3>


        <!-- Rating -->

        <div class="product-rating">

            <span class="stars">

                ${createStars(product.rating)}

            </span>

            <small>

                (${product.rating})

            </small>

        </div>


        <!-- Price -->

        <div class="price">

            ${formatPrice(product.price)}

        </div>


        <!-- Cart -->

        <button class="add-cart">

            🛒 &nbsp; Add to Cart

        </button>

    `;


    // Wishlist

    const wishlist =
        card.querySelector(".wishlist");


    wishlist.addEventListener(
        "click",
        function () {

            this.classList.toggle("active");


            if (
                this.classList.contains("active")
            ) {

                this.textContent = "♥";

            } else {

                this.textContent = "♡";

            }

        }
    );


    // Add to cart

    const cartButton =
        card.querySelector(".add-cart");


    cartButton.addEventListener(
        "click",
        function () {

            addToCart(product);

        }
    );


    return card;

}


// ======================================================
// DISPLAY PRODUCTS
// ======================================================

function displayProducts(productList) {

    productsGrid.innerHTML = "";


    productList.forEach(
        product => {

            const card =
                createProductCard(product);

            productsGrid.appendChild(card);

        }
    );

}


// ======================================================
// SORT PRODUCTS
// ======================================================

sortProducts.addEventListener(
    "change",
    function () {

        let sortedProducts =
            [...newProducts];


        switch (this.value) {


            case "priceLow":

                sortedProducts.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;


            case "priceHigh":

                sortedProducts.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;


            case "rating":

                sortedProducts.sort(
                    (a, b) =>
                        b.rating - a.rating
                );

                break;


            case "discount":

                sortedProducts.sort(
                    (a, b) =>
                        b.discount - a.discount
                );

                break;


            case "newest":

            default:

                sortedProducts.sort(
                    (a, b) =>
                        a.date - b.date
                );

                break;

        }


        displayProducts(
            sortedProducts
        );

    }
);


// ======================================================
// ADD TO CART
// ======================================================

function addToCart(product) {

    console.log(
        "Product added:",
        product
    );


    alert(
        `${product.name} added to cart!`
    );

}


// ======================================================
// EXPLORE BUTTON
// ======================================================

exploreButton.addEventListener(
    "click",
    function () {

        document
            .getElementById("productsGrid")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// ======================================================
// PRICE RANGE
// ======================================================

const priceRange =
    document.getElementById("priceRange");


priceRange.addEventListener(
    "input",
    function () {

        console.log(
            "Selected maximum price:",
            this.value
        );

    }
);


// ======================================================
// INITIAL LOAD
// ======================================================

displayProducts(newProducts);