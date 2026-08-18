// ======================================================
// DEAL PRODUCTS
// ======================================================

const products = [

    {
        id: 1,
        name: "boAt Rockerz 450 Pro Wireless Headphones",
        image: "images/headphone.png",
        price: 2099,
        oldPrice: 2999,
        discount: 30,
        rating: 4.8,
        type: "flash",
        category: "Electronics",
        label: "Flash Deal"
    },


    {
        id: 2,
        name: "realme 16 5G (Air White, 128 GB) (8 GB RAM)",
        image: "images/realme-16.jpg",
        price: 30659,
        oldPrice: 41999,
        discount: 27,
        rating: 4.6,
        type: "flash",
        category: "Electronics",
        label: "Flash Deal"
    },


    {
        id: 3,
        name: "Noise Fit Halo Plus Smart Watch",
        image: "images/watch.png",
        price: 3695,
        oldPrice: 8999,
        discount: 42,
        rating: 4.8,
        type: "top",
        category: "Electronics",
        label: "Top Deal"
    },


    {
        id: 4,
        name: "One Piece Skull Oversized T Shirt for Men ",
        image: "images/1pwhite-tshirt.png",
        price: 1299,
        oldPrice: 1999,
        discount: 35,
        rating: 4.5,
        type: "top",
        category: "Fashion",
        label: "Top Deal"
    },


    {
        id: 5,

        name:
            "Wild Stone Eau De Parfum (100ml)",

        image:
            "images/wild-perfume.png",

        price: 599,

        oldPrice: 799,

        discount: 25,

        rating: 4.4,

        type: "day",

        category: "Beauty",

        label: "Deal of the Day"
    },


    // ==================================================
    // PAGE 2 PRODUCTS
    // ==================================================

    {
        id: 6,

        name:
            "Samsung Galaxy Buds Wireless Earbuds",

        image:
            "images/samsung-buds.png",

        price: 5499,

        oldPrice: 6999,

        discount: 21,

        rating: 4.6,

        type: "flash",

        category: "Electronics",

        label: "Flash Deal"
    },


    {
        id: 7,

        name:
            "Nike Men's Revolution Running Shoes",

        image:
            "images/nike-shoes.png",

        price: 2499,

        oldPrice: 3999,

        discount: 38,

        rating: 4.6,

        type: "weekend",

        category: "Sports",

        label: "Weekend Deal"
    },


    {
        id: 8,

        name:
            "Levi's Men's Regular Fit Jeans",

        image:
            "images/levis-jeans.jpg",

        price: 2199,

        oldPrice: 3499,

        discount: 37,

        rating: 4.5,

        type: "weekend",

        category: "Fashion",

        label: "Weekend Deal"
    },


    {
        id: 9,

        name:
            "Philips Mixer Grinder 750W",

        image:
            "images/phillips-mixer.png",

        price: 3999,

        oldPrice: 5499,

        discount: 27,

        rating: 4.4,

        type: "day",

        category: "Home",

        label: "Deal of the Day"
    },


    {
        id: 10,

        name:
            "American Tourister Travel Backpack",

        image:
            "images/american-bag.png",

        price: 1599,

        oldPrice: 2499,

        discount: 36,

        rating: 4.5,

        type: "clearance",

        category: "Fashion",

        label: "Clearance"
    },


    // ==================================================
    // PAGE 3
    // ==================================================

    {
        id: 11,

        name:
            "Apple AirPods Pro",

        image:
            "images/airpods-pro.webp",

        price: 18999,

        oldPrice: 24999,

        discount: 24,

        rating: 4.8,

        type: "top",

        category: "Electronics",

        label: "Top Deal"
    },


    {
        id: 12,

        name:
            "Samsung 55 Inch Smart LED TV",

        image:
            "images/samsung-tv.png",

        price: 42999,

        oldPrice: 59999,

        discount: 28,

        rating: 4.7,

        type: "bank",

        category: "Electronics",

        label: "Bank Offer"
    },


    {
        id: 13,

        name:
            "Puma Men's Sports Jacket",

        image:
            "images/puma-hoodie.jpg",

        price: 1999,

        oldPrice: 2999,

        discount: 33,

        rating: 4.4,

        type: "clearance",

        category: "Fashion",

        label: "Clearance"
    },


    {
        id: 14,

        name:
            "Fastrack Men's Analog Watch",

        image:
            "images/fastrack-watch.png",

        price: 1799,

        oldPrice: 2499,

        discount: 28,

        rating: 4.4,

        type: "weekend",

        category: "Fashion",

        label: "Weekend Deal"
    },


    {
        id: 15,

        name:
            "Prestige Electric Rice Cooker",

        image:
            "images/prestige-cooker.png",

        price: 2199,

        oldPrice: 2999,

        discount: 27,

        rating: 4.4,

        type: "day",

        category: "Home",

        label: "Deal of the Day"
    },


    // ==================================================
    // PAGE 4
    // ==================================================

    {
        id: 16,

        name:
            "Sony Noise Cancelling Headphones",

        image:
            "images/sony-headphone.png",

        price: 8999,

        oldPrice: 11999,

        discount: 25,

        rating: 4.7,

        type: "flash",

        category: "Electronics",

        label: "Flash Deal"
    },


    {
        id: 17,

        name:
            "Wildcraft Polyester Rucksack for Men & Women – Expedition RSK 45 Backpack",

        image:
            "images/wildcraft-bag.png",

        price: 1399,

        oldPrice: 1999,

        discount: 30,

        rating: 4.4,

        type: "clearance",

        category: "Fashion",

        label: "Clearance"
    },


    {
        id: 18,

        name:
            "Havells Room Heater",

        image:
            "images/havells-heater.jpg",

        price: 2799,

        oldPrice: 3499,

        discount: 20,

        rating: 4.2,

        type: "bank",

        category: "Home",

        label: "Bank Offer"
    },


    {
        id: 19,

        name:
            "Adidas Men's Running Shoes",

        image:
            "images/adidas-shoes.png",

        price: 3599,

        oldPrice: 4999,

        discount: 28,

        rating: 4.6,

        type: "top",

        category: "Sports",

        label: "Top Deal"
    },


    {
        id: 20,

        name:
            "Philips Beard Trimmer",

        image:
            "images/philips-trimmer.png",

        price: 1199,

        oldPrice: 1599,

        discount: 25,

        rating: 4.5,

        type: "day",

        category: "Beauty",

        label: "Deal of the Day"
    },


    // ==================================================
    // PAGE 5
    // ==================================================

    {
        id: 21,

        name:
            "Blind Spot Rear View Mirror, 360° Rotatable Round HD Convex Mirror",

        image:
            "images/car-mirror.png",

        price: 394,

        oldPrice: 480,

        discount: 18,

        rating: 4.5,

        type: "bank",

        category: "Automotive",

        label: "Bank Offer"
    },


    {
        id: 22,

        name:
            "Mi Smart Air Purifier",

        image:
            "images/mi-aircooler.png",

        price: 8999,

        oldPrice: 10999,

        discount: 18,

        rating: 4.3,

        type: "top",

        category: "Home",

        label: "Top Deal"
    },


    {
        id: 23,

        name:
            "Durable 100-in-1 Programmable IoT Electronics Learning Toy | Heavy Duty Material",

        image:
            "images/toy-100in1.png",

        price: 2999,

        oldPrice: 4165,

        discount: 28,

        rating: 4.3,

        type: "weekend",

        category: "Toys & Games",

        label: "Weekend Deal"
    },


    {
        id: 24,

        name:
            "Bajaj Mixer Grinder",

        image:
            "images/bajaj-mixer.jpg",

        price: 3499,

        oldPrice: 4499,

        discount: 22,

        rating: 4.4,

        type: "day",

        category: "Home",

        label: "Deal of the Day"
    },


    {
        id: 25,

        name:
            "Casio Men's Sports Watch",

        image:
            "images/casio-watch.png",

        price: 2999,

        oldPrice: 3999,

        discount: 25,

        rating: 4.5,

        type: "flash",

        category: "Fashion",

        label: "Flash Deal"
    }

];


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