
// NEW ARRIVAL PRODUCTS


const newProducts = allProducts.filter((product) => product.source === "newarrivals");



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