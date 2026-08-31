// ======================================================
// PRODUCT DATA
// ======================================================

const products = allProducts.filter((product) => product.source === "shop");



// SETTINGS


const productsPerPage = 12;

let currentPage = 1;

let displayedProducts = [...products];


// DOM ELEMENTS


let productsGrid;
let pagination;
let productCount;
let sortProducts;


// FORMAT PRICE

function formatPrice(price){
    return Intl.NumberFormat("en-IN", {
        style : "currency",
        currency : "INR",
        maximumFractionDigits : 0
    }).format(price);
}


// CREATE STAR RATING

function createStars(rating) {

    const fullStars = Math.floor(rating);

    const halfStar = (rating % 1) >= 0.5 ? 1 : 0;

    const emptyStars =
        5 - fullStars - halfStar;

    // note: using a full star for half ratings for simplicity
    return "★".repeat(fullStars) +
        (halfStar ? "★" : "") +
        "☆".repeat(emptyStars);

}


// RENDER PRODUCTS


function renderProducts() {

    if (!productsGrid) return;

    productsGrid.innerHTML = "";


    // Starting position
    const startIndex =
        (currentPage - 1) * productsPerPage;


    // Ending position
    const endIndex =
        startIndex + productsPerPage;


    // Products for current page
    const currentProducts =
        displayedProducts.slice(startIndex, endIndex);


    // Create product cards
    currentProducts.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <span class="discount-badge">
                -${product.discount}%
            </span>


            <button
                class="wishlist"
                onclick="toggleWishlist(this)"
            >
                ♡
            </button>


            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <h3 class="product-name">
                ${product.name}
            </h3>


            <div class="product-rating">

                <span class="stars">
                    ${createStars(product.rating)}
                </span>

                <span class="rating-value">
                    (${product.rating})
                </span>

            </div>


            <div class="price-row">

                <span class="current-price">
                    ${formatPrice(product.price)}
                </span>

                <span class="old-price">
                    ${formatPrice(product.oldPrice)}
                </span>

            </div>


            <button
                class="add-cart"
                onclick="addToCart(${product.id})"
            >
                🛒 Add to Cart
            </button>

        `;


        productsGrid.appendChild(card);

    });


    updateProductCount();

    renderPagination();

}


// PRODUCT COUNT


function updateProductCount() {

    if (!productCount) return;

    const total = displayedProducts.length;

    const start =
        total === 0
            ? 0
            : (currentPage - 1) * productsPerPage + 1;

    const end =
        Math.min(
            currentPage * productsPerPage,
            total
        );


    productCount.textContent =
        `Showing ${start}-${end} of ${total} products`;

}


// PAGINATION


function renderPagination() {

    if (!pagination) return;

    pagination.innerHTML = "";


    const totalPages =
        Math.ceil(
            displayedProducts.length /
            productsPerPage
        );

    if (totalPages === 0) {
        // nothing to show
        return;
    }

    // Previous
    const previousButton =
        document.createElement("button");

    previousButton.className = "page-btn";

    previousButton.innerHTML = "‹";

    previousButton.disabled =
        currentPage === 1;

    previousButton.onclick = () => {

        if (currentPage > 1) {

            currentPage--;

            renderProducts();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    };

    pagination.appendChild(previousButton);


    // Page numbers
    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        const pageButton =
            document.createElement("button");

        pageButton.className = "page-btn";

        pageButton.textContent = page;


        if (page === currentPage) {

            pageButton.classList.add("active");

        }


        pageButton.onclick = () => {

            currentPage = page;

            renderProducts();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };


        pagination.appendChild(pageButton);

    }


    // Next
    const nextButton =
        document.createElement("button");

    nextButton.className = "page-btn";

    nextButton.innerHTML = "›";

    nextButton.disabled =
        currentPage === totalPages;

    nextButton.onclick = () => {

        if (currentPage < totalPages) {

            currentPage++;

            renderProducts();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    };

    pagination.appendChild(nextButton);

}





// WISHLIST

function toggleWishlist(button) {

    let wishlist = document.querySelector(".wishlist");
    let addWishlist = document.getElementById("wish-count")

    addWishlist.textContent ++;
    button.classList.toggle("active");


    if (button.classList.contains("active")) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}


// ADD TO CART

function addToCart(productId) {
    const cartCount = document.getElementById("cart-count");
    const addCart = document.querySelector(".add-cart");
    const product = products.find(product => product.id === productId);
    cartCount.textContent++;

    alert(
        `${product.name} added to cart!`
    );

}


// INITIAL LOAD


document.addEventListener("DOMContentLoaded", () => {
    productsGrid = document.getElementById("productsGrid");
    pagination = document.getElementById("pagination");
    productCount = document.getElementById("productCount");
    sortProducts = document.getElementById("sortProducts");

    // attach sort listener if element exists
    if (sortProducts) {
        sortProducts.addEventListener("change", function () {

            const value = this.value;


            if (value === "low") {

                displayedProducts.sort(
                    (a, b) => a.price - b.price
                );

            }


            else if (value === "high") {

                displayedProducts.sort(
                    (a, b) => b.price - a.price
                );

            }


            else if (value === "rating") {

                displayedProducts.sort(
                    (a, b) => b.rating - a.rating
                );

            }


            else if (value === "discount") {

                displayedProducts.sort(
                    (a, b) => b.discount - a.discount
                );

            }


            else {

                displayedProducts = [...products];

            }


            currentPage = 1;

            renderProducts();

        });
    }

    // initial render
    renderProducts();
});
