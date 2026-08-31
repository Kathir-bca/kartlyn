// ======================================================
// DEAL PRODUCTS
// ======================================================

const products = allProducts.filter((product) => product.source === "deals");



// ======================================================
// SETTINGS
// ======================================================

// Screenshot contains 5 cards.
const productsPerPage = 5;


// Current page
let currentPage = 1;


// Currently visible products
let displayedProducts = [...products];


// Current category/deal filter
let currentType = "all";


// ======================================================
// DOM
// ======================================================

const dealsGrid =
    document.getElementById("dealsGrid");


const pagination =
    document.getElementById("pagination");


const sortDeals =
    document.getElementById("sortDeals");


// ======================================================
// STAR FUNCTION
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
// PRICE FORMAT
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
// RENDER PRODUCTS
// ======================================================

function renderProducts() {

    dealsGrid.innerHTML = "";


    // Start index
    const start =
        (currentPage - 1) *
        productsPerPage;


    // End index
    const end =
        start +
        productsPerPage;


    // Products for current page
    const currentProducts =
        displayedProducts.slice(
            start,
            end
        );


    currentProducts.forEach(product => {

        const card =
            document.createElement("article");


        card.className =
            "deal-card";


        card.innerHTML = `

            <!-- Discount -->

            <span class="discount-badge">
                -${product.discount}%
            </span>


            <!-- Wishlist -->

            <button
                class="wishlist"
                onclick="toggleWishlist(this)"
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


            <!-- Deal Type -->

            <span class="deal-type">
                ${product.label}
            </span>


            <!-- Product Name -->

            <h3 class="product-name">
                ${product.name}
            </h3>


            <!-- Rating -->

            <div class="product-rating">

                <span class="stars">
                    ${createStars(product.rating)}
                </span>

                <span class="rating">
                    (${product.rating})
                </span>

            </div>


            <!-- Price -->

            <div class="price-section">

                <div class="prices">

                    <span class="current-price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                </div>


                <span class="discount-percent">
                    ${product.discount}% OFF
                </span>

            </div>


            <!-- Timer -->

            <p class="ends-in">

                Ends in:

                <strong class="card-countdown">
                    08 : 45 : 32
                </strong>

            </p>


            <!-- Add Cart -->

            <button
                class="add-cart"
                onclick="addToCart(${product.id})"
            >
                🛒 &nbsp; Add to Cart
            </button>

        `;


        dealsGrid.appendChild(card);

    });


    renderPagination();

}


// ======================================================
// PAGINATION
// ======================================================

function renderPagination() {

    pagination.innerHTML = "";


    const totalPages =
        Math.ceil(
            displayedProducts.length /
            productsPerPage
        );


    // Previous

    const previous =
        document.createElement("button");

    previous.className =
        "page-btn";

    previous.textContent = "‹";

    previous.disabled =
        currentPage === 1;


    previous.onclick = () => {

        if (currentPage > 1) {

            currentPage--;

            renderProducts();

            scrollTop();

        }

    };


    pagination.appendChild(previous);


    // Page numbers

    for (
        let i = 1;
        i <= totalPages;
        i++
    ) {

        const button =
            document.createElement("button");


        button.className =
            "page-btn";


        button.textContent =
            i;


        if (
            i === currentPage
        ) {

            button.classList.add(
                "active"
            );

        }


        button.onclick = () => {

            currentPage = i;

            renderProducts();

            scrollTop();

        };


        pagination.appendChild(button);

    }


    // Next

    const next =
        document.createElement("button");


    next.className =
        "page-btn";


    next.textContent = "›";


    next.disabled =
        currentPage === totalPages;


    next.onclick = () => {

        if (
            currentPage <
            totalPages
        ) {

            currentPage++;

            renderProducts();

            scrollTop();

        }

    };


    pagination.appendChild(next);

}


// ======================================================
// SCROLL TOP
// ======================================================

function scrollTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ======================================================
// FILTER BY DEAL TYPE
// ======================================================

function filterByType(type) {

    currentType = type;


    if (type === "all") {

        displayedProducts =
            [...products];

    }

    else {

        displayedProducts =
            products.filter(
                product =>
                    product.type === type
            );

    }


    currentPage = 1;


    renderProducts();

}


// ======================================================
// SIDEBAR + TOP DEAL BUTTONS
// ======================================================

const dealButtons =
    document.querySelectorAll(
        ".deal-nav, .deal-tab"
    );


dealButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const type =
                this.dataset.type;


            // Remove active
            // from sidebar
            document
                .querySelectorAll(".deal-nav")
                .forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


            // Remove active
            // from top tabs
            document
                .querySelectorAll(".deal-tab")
                .forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


            // Add active
            // to matching buttons
            document
                .querySelectorAll(
                    `[data-type="${type}"]`
                )
                .forEach(btn => {

                    btn.classList.add(
                        "active"
                    );

                });


            filterByType(type);

        }
    );

});


// ======================================================
// CATEGORY FILTER
// ======================================================

const categoryCheckboxes =
    document.querySelectorAll(
        ".category-filter"
    );


categoryCheckboxes.forEach(
    checkbox => {

        checkbox.addEventListener(
            "change",
            filterByCategory
        );

    }
);


function filterByCategory() {

    const selectedCategories =
        Array.from(
            categoryCheckboxes
        )

            .filter(
                checkbox =>
                    checkbox.checked
            )

            .map(
                checkbox =>
                    checkbox.value
            );


    // No category selected
    if (
        selectedCategories.length === 0
    ) {

        filterByType(currentType);

        return;

    }


    let baseProducts;


    if (
        currentType === "all"
    ) {

        baseProducts =
            [...products];

    }

    else {

        baseProducts =
            products.filter(
                product =>
                    product.type ===
                    currentType
            );

    }


    displayedProducts =
        baseProducts.filter(
            product =>
                selectedCategories.includes(
                    product.category
                )
        );


    currentPage = 1;

    renderProducts();

}


// ======================================================
// SORT
// ======================================================

sortDeals.addEventListener(
    "change",
    function () {

        switch (this.value) {

            case "priceLow":

                displayedProducts.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;


            case "priceHigh":

                displayedProducts.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;


            case "discount":

                displayedProducts.sort(
                    (a, b) =>
                        b.discount -
                        a.discount
                );

                break;


            case "rating":

                displayedProducts.sort(
                    (a, b) =>
                        b.rating -
                        a.rating
                );

                break;


            default:

                filterByType(
                    currentType
                );

                return;

        }


        currentPage = 1;

        renderProducts();

    }
);


// ======================================================
// WISHLIST
// ======================================================

function toggleWishlist(button) {

    button.classList.toggle(
        "active"
    );


    if (
        button.classList.contains(
            "active"
        )
    ) {

        button.innerHTML = "♥";

    }

    else {

        button.innerHTML = "♡";

    }

}


// ======================================================
// ADD TO CART
// ======================================================

function addToCart(productId) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) return;


    alert(
        `${product.name} added to cart!`
    );

}


// ======================================================
// FILTER COLLAPSE
// ======================================================

const filterToggle =
    document.getElementById(
        "filterToggle"
    );


const filterContent =
    document.getElementById(
        "filterContent"
    );


filterToggle.addEventListener(
    "click",
    () => {

        if (
            filterContent.style.display ===
            "none"
        ) {

            filterContent.style.display =
                "block";

            filterToggle.textContent =
                "⌃";

        }

        else {

            filterContent.style.display =
                "none";

            filterToggle.textContent =
                "⌄";

        }

    }
);


// ======================================================
// VIEW MORE
// ======================================================

const viewMore =
    document.getElementById(
        "viewMore"
    );


viewMore.addEventListener(
    "click",
    () => {

        alert(
            "More categories can be displayed here."
        );

    }
);


// ======================================================
// COUNTDOWN
// ======================================================

// 8 hours 45 minutes 32 seconds

let totalSeconds =
    (8 * 60 * 60) +
    (45 * 60) +
    32;


function updateCountdown() {

    const hours =
        Math.floor(
            totalSeconds / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) /
            60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2, "0");


    document
        .querySelectorAll(
            ".card-countdown"
        )
        .forEach(timer => {

            timer.textContent =
                `${String(hours).padStart(2, "0")} : ` +
                `${String(minutes).padStart(2, "0")} : ` +
                `${String(seconds).padStart(2, "0")}`;

        });


    if (totalSeconds > 0) {

        totalSeconds--;

    }

    else {

        totalSeconds =
            (24 * 60 * 60);

    }

}


setInterval(
    updateCountdown,
    1000
);


// ======================================================
// INITIAL DISPLAY
// ======================================================

renderProducts();

updateCountdown();