// ======================================================
// PRODUCT DATA
// ======================================================

const products = [

    {
        id: 1,
        name: "boAt Rockerz 450 Pro Wireless Headphones",
        image: "images/boat-rockerz.png",
        price: 1999,
        oldPrice: 2499,
        discount: 20,
        rating: 4.6
    },
    {
        id: 2,
        name: "realme Narzo Power 5G (Nebula Blue, 128 GB)",
        image: "images/realme-narzo-power.png",
        price: 29999,
        oldPrice: 34999,
        discount: 13,
        rating: 4.4
    },


    {
        id: 3,
        name: "The Souled Store One Piece T-Shirt for Men",
        image: "images/onepiece.png",
        price: 1899,
        oldPrice: 2599,
        discount: 27,
        rating: 4.8
    },

    {
        id: 4,
        name: "MICROSOFT Surface Laptop SD X2 Elite",
        image: "images/laptop.png",
        price: 34990,
        oldPrice: 50000,
        discount: 30,
        rating: 4.6
    },

    {
        id: 5,
        name: "Puma Men's Smashic Sneakers",
        image: "images/puma-sneakers.png",
        price: 2549,
        oldPrice: 2999,
        discount: 15,
        rating: 4.3
    },

    {
        id: 2,
        name: "Noise Fit Halo Plus Smart Watch",
        image: "images/watch.png",
        price: 3695,
        oldPrice: 8999,
        discount: 42,
        rating: 4.8
    },
    {
        id: 7,
        name: "Bellavita Luxury Perfume for Men (100ml)",
        image: "images/bellavita.png",
        price: 849,
        oldPrice: 1049,
        discount: 18,
        rating: 4.2
    },

    {
        id: 8,
        name: "Safari Pentagon Laptop Backpack",
        image: "images/safari-bag.png",
        price: 1499,
        oldPrice: 1899,
        discount: 21,
        rating: 4.4
    },

    {
        id: 10,
        name: "boAt Airdopes 141 True Wireless Earbuds",
        image: "images/boat-airpods.png",
        price: 1299,
        oldPrice: 1499,
        discount: 12,
        rating: 4.4
    },
    
    {
        id: 9,
        name: "Adidas Men's Running Shoes",
        image: "images/adidas-shoes.png",
        price: 3599,
        oldPrice: 4299,
        discount: 16,
        rating: 4.6
    },


    {
        id: 11,
        name: "Philips HL7756/00 Mixer Grinder (750W)",
        image: "images/phillips-mixer.png",
        price: 4499,
        oldPrice: 5999,
        discount: 25,
        rating: 4.3
    },

    {
        id: 12,
        name: "Atomic Habits by James Clear",
        image: "images/atomic-habits.png",
        price: 332,
        oldPrice: 399,
        discount: 17,
        rating: 4.7
    },


    // ==================================================
    // PAGE 2
    // ==================================================

    {
        id: 13,
        name: "Samsung Galaxy Buds Wireless Earbuds",
        image: "images/samsung-buds.png",
        price: 5499,
        oldPrice: 6999,
        discount: 21,
        rating: 4.6
    },

    {
        id: 14,
        name: "Apple iPhone 15 128GB",
        image: "images/iphone-15.png",
        price: 61999,
        oldPrice: 69999,
        discount: 11,
        rating: 4.8
    },

    {
        id: 15,
        name: "Sony Bluetooth Noise Cancelling Headphones",
        image: "images/sony-headphone.png",
        price: 8999,
        oldPrice: 11999,
        discount: 25,
        rating: 4.7
    },

    {
        id: 16,
        name: "Samsung 55 inch Smart LED TV",
        image: "images/samsung-tv.png",
        price: 42999,
        oldPrice: 59999,
        discount: 28,
        rating: 4.6
    },

    {
        id: 17,
        name: "Nike Men's Sports Shoes",
        image: "images/nike-shoes.png",
        price: 3999,
        oldPrice: 4999,
        discount: 20,
        rating: 4.5
    },

    {
        id: 18,
        name: "American Tourister Travel Backpack",
        image: "images/american-bag.png",
        price: 1799,
        oldPrice: 2499,
        discount: 28,
        rating: 4.4
    },

    {
        id: 19,
        name: "Logitech Wireless Keyboard",
        image: "images/logitech-keyboard.png",
        price: 1499,
        oldPrice: 1999,
        discount: 25,
        rating: 4.3
    },

    {
        id: 20,
        name: "ZEBRONICS Wireless Mouse",
        image: "images/zebronics-mouse.png",
        price: 799,
        oldPrice: 999,
        discount: 20,
        rating: 4.2
    },

    {
        id: 21,
        name: "OnePlus Nord CE Smartphone",
        image: "images/oneplus-phones.png",
        price: 21999,
        oldPrice: 24999,
        discount: 12,
        rating: 4.5
    },

    {
        id: 22,
        name: "Casio Men's Analog Watch",
        image: "images/casio-watch.png",
        price: 2999,
        oldPrice: 3999,
        discount: 25,
        rating: 4.4
    },

    {
        id: 23,
        name: "Wildcraft Men's Jacket",
        image: "images/men-jacket.png",
        price: 2699,
        oldPrice: 3999,
        discount: 32,
        rating: 4.3
    },

    {
        id: 24,
        name: "Prestige Electric Rice Cooker",
        image: "images/prestige-cooker.png",
        price: 2199,
        oldPrice: 2999,
        discount: 27,
        rating: 4.4
    },


    // ==================================================
    // PAGE 3
    // ==================================================

    {
        id: 25,
        name: "Apple AirPods Pro",
        image: "images/airpods-pro.jpg",
        price: 18999,
        oldPrice: 24999,
        discount: 24,
        rating: 4.8
    },

    {
        id: 26,
        name: "Dell Inspiron Laptop",
        image: "images/dell-laptop.jpg",
        price: 55999,
        oldPrice: 67999,
        discount: 18,
        rating: 4.6
    },

    {
        id: 27,
        name: "Mi Smart Air Purifier",
        image: "images/mi-air-purifier.jpg",
        price: 8999,
        oldPrice: 10999,
        discount: 18,
        rating: 4.3
    },

    {
        id: 28,
        name: "Puma Men's Hoodie",
        image: "images/puma-hoodie.jpg",
        price: 1899,
        oldPrice: 2999,
        discount: 37,
        rating: 4.4
    },

    {
        id: 29,
        name: "Levi's Men's Regular Jeans",
        image: "images/levis-jeans.jpg",
        price: 2499,
        oldPrice: 3499,
        discount: 29,
        rating: 4.5
    },

    {
        id: 30,
        name: "Philips Beard Trimmer",
        image: "images/philips-trimmer.jpg",
        price: 1199,
        oldPrice: 1599,
        discount: 25,
        rating: 4.5
    },

    {
        id: 31,
        name: "Havells Room Heater",
        image: "images/havells-heater.jpg",
        price: 2799,
        oldPrice: 3499,
        discount: 20,
        rating: 4.2
    },

    {
        id: 32,
        name: "Bajaj Mixer Grinder",
        image: "images/bajaj-mixer.jpg",
        price: 3499,
        oldPrice: 4499,
        discount: 22,
        rating: 4.4
    },

    {
        id: 33,
        name: "Nike Sports T-Shirt",
        image: "images/nike-shirt.jpg",
        price: 1299,
        oldPrice: 1799,
        discount: 27,
        rating: 4.3
    },

    {
        id: 34,
        name: "Samsung Fast Charger",
        image: "images/samsung-charger.jpg",
        price: 999,
        oldPrice: 1499,
        discount: 33,
        rating: 4.5
    },

    {
        id: 35,
        name: "Fastrack Men's Watch",
        image: "images/fastrack-watch.jpg",
        price: 1799,
        oldPrice: 2499,
        discount: 28,
        rating: 4.4
    },

    {
        id: 36,
        name: "The Psychology of Money",
        image: "images/psychology-money.jpg",
        price: 349,
        oldPrice: 499,
        discount: 30,
        rating: 4.8
    }

];


// ======================================================
// SETTINGS
// ======================================================

const productsPerPage = 12;

let currentPage = 1;

let displayedProducts = [...products];


// ======================================================
// DOM ELEMENTS
// ======================================================

const productsGrid = document.getElementById("productsGrid");

const pagination = document.getElementById("pagination");

const productCount = document.getElementById("productCount");

const sortProducts = document.getElementById("sortProducts");


// ======================================================
// FORMAT PRICE
// ======================================================

function formatPrice(price) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);

}


// ======================================================
// CREATE STAR RATING
// ======================================================

function createStars(rating) {

    const fullStars = Math.floor(rating);

    const halfStar = rating % 1 >= 0.5 ? 1 : 0;

    const emptyStars =
        5 - fullStars - halfStar;

    return "★".repeat(fullStars) +
        (halfStar ? "★" : "") +
        "☆".repeat(emptyStars);

}


// ======================================================
// RENDER PRODUCTS
// ======================================================

function renderProducts() {

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


// ======================================================
// PRODUCT COUNT
// ======================================================

function updateProductCount() {

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


// ======================================================
// SORT PRODUCTS
// ======================================================

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


// ======================================================
// WISHLIST
// ======================================================

function toggleWishlist(button) {

    button.classList.toggle("active");


    if (
        button.classList.contains("active")
    ) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }

}


// ======================================================
// ADD TO CART
// ======================================================

function addToCart(productId) {

    const product =
        products.find(
            product => product.id === productId
        );


    if (!product) return;


    alert(
        `${product.name} added to cart!`
    );

}


// ======================================================
// INITIAL LOAD
// ======================================================

renderProducts();