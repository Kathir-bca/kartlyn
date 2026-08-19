// =============================================
// BRAND DATA
// =============================================

const brands = [

    {
        id: 1,
        name: "Apple",
        logo: "logo/apple.png",
        products: 125,
        category: "Electronics",
        popularity: 100,
        rating: 4.9,
        type: "popular",
        year: 2020
    },

    {
        id: 2,
        name: "Samsung",
        logo: "logo/samsung.png",
        products: 110,
        category: "Electronics",
        popularity: 98,
        rating: 4.8,
        type: "popular",
        year: 2020
    },

    {
        id: 3,
        name: "Nike",
        logo: "logo/nike.png",
        products: 85,
        category: "Sports",
        popularity: 95,
        rating: 4.8,
        type: "popular",
        year: 2020
    },

    {
        id: 4,
        name: "Adidas",
        logo: "logo/adidas.png",
        products: 78,
        category: "Sports",
        popularity: 94,
        rating: 4.7,
        type: "popular",
        year: 2020
    },

    {
        id: 5,
        name: "boAt",
        logo: "logo/boat.png",
        products: 65,
        category: "Electronics",
        popularity: 91,
        rating: 4.6,
        type: "popular",
        year: 2021
    },

    {
        id: 6,
        name: "Sony",
        logo: "logo/sony.png",
        products: 58,
        category: "Electronics",
        popularity: 90,
        rating: 4.7,
        type: "popular",
        year: 2020
    },

    {
        id: 7,
        name: "realme",
        logo: "logo/r-realme.png",
        products: 55,
        category: "Electronics",
        popularity: 88,
        rating: 4.5,
        type: "popular",
        year: 2021
    },

    {
        id: 8,
        name: "OnePlus",
        logo: "logo/1+-oneplus.png",
        products: 48,
        category: "Electronics",
        popularity: 86,
        rating: 4.6,
        type: "popular",
        year: 2021
    },

    {
        id: 9,
        name: "Puma",
        logo: "logo/puma.png",
        products: 42,
        category: "Sports",
        popularity: 84,
        rating: 4.5,
        type: "popular",
        year: 2021
    },

    {
        id: 10,
        name: "Levi's",
        logo: "logo/levis.png",
        products: 38,
        category: "Fashion",
        popularity: 82,
        rating: 4.6,
        type: "popular",
        year: 2020
    },

    {
        id: 11,
        name: "JBL",
        logo: "logo/jbl.png",
        products: 35,
        category: "Electronics",
        popularity: 80,
        rating: 4.5,
        type: "popular",
        year: 2021
    },

    {
        id: 12,
        name: "Philips",
        logo: "logo/philips.png",
        products: 32,
        category: "Home & Living",
        popularity: 78,
        rating: 4.4,
        type: "popular",
        year: 2020
    },

    {
        id: 13,
        name: "Amazon Basics",
        logo: "logo/amazon-basics.png",
        products: 30,
        category: "Home & Living",
        popularity: 75,
        rating: 4.3,
        type: "popular",
        year: 2021
    },

    {
        id: 14,
        name: "HP",
        logo: "logo/hp.png",
        products: 28,
        category: "Electronics",
        popularity: 73,
        rating: 4.5,
        type: "popular",
        year: 2020
    },

    {
        id: 15,
        name: "Dell",
        logo: "logo/dell.png",
        products: 26,
        category: "Electronics",
        popularity: 71,
        rating: 4.4,
        type: "popular",
        year: 2020
    },

    {
        id: 16,
        name: "LG",
        logo: "logo/lg.png",
        products: 24,
        category: "Electronics",
        popularity: 69,
        rating: 4.4,
        type: "popular",
        year: 2020
    },

    {
        id: 17,
        name: "Foreo",
        logo: "logo/foreo.png",
        products: 20,
        category: "Beauty",
        popularity: 60,
        rating: 4.6,
        type: "new",
        year: 2025
    },

    {
        id: 18,
        name: "Milton",
        logo: "logo/milton.png",
        products: 18,
        category: "Home & Living",
        popularity: 58,
        rating: 4.3,
        type: "new",
        year: 2024
    }

];


// =============================================
// VARIABLES
// =============================================

const brandsGrid =
    document.getElementById("brandsGrid");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("brandSearch");

const searchButton =
    document.getElementById("searchButton");

let currentLetter = "all";

let currentSection = "all";

let selectedCategories = [];


// =============================================
// DISPLAY BRANDS
// =============================================

function displayBrands(list) {

    brandsGrid.innerHTML = "";


    if (list.length === 0) {

        emptyState.classList.add("show");

        return;

    }


    emptyState.classList.remove("show");


    list.forEach(brand => {

        const card =
            document.createElement("article");


        card.className = "brand-card";


        card.innerHTML = `

            <div class="brand-logo">

                <img
                    src="${brand.logo}"
                    alt="${brand.name} logo"
                    loading="lazy"
                >

            </div>


            <h3 class="brand-name">

                ${brand.name}

                <span class="verified">
                    <i class="fa-solid fa-check"></i>
                </span>

            </h3>


            <p class="brand-products">

                ${brand.products} Products

            </p>


            <button
                class="view-products"
                data-id="${brand.id}"
            >
                View Products
            </button>

        `;


        brandsGrid.appendChild(card);

    });


    addProductButtonEvents();

}


// =============================================
// FILTER + SEARCH
// =============================================

function filterBrands() {

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    let result =
        [...brands];


    // Search

    if (searchText) {

        result = result.filter(brand =>

            brand.name
                .toLowerCase()
                .includes(searchText)

        );

    }


    // Alphabet

    if (currentLetter !== "all") {

        if (currentLetter === "#") {

            result = result.filter(brand =>

                !/^[a-z]/i.test(brand.name)

            );

        }

        else {

            result = result.filter(brand =>

                brand.name
                    .toUpperCase()
                    .startsWith(currentLetter)

            );

        }

    }


    // Category

    if (selectedCategories.length > 0) {

        result = result.filter(brand =>

            selectedCategories.includes(
                brand.category
            )

        );

    }


    // Sidebar section

    if (currentSection === "popular") {

        result = result.filter(
            brand => brand.type === "popular"
        );

    }


    if (currentSection === "rated") {

        result = result.filter(
            brand => brand.rating >= 4.6
        );

    }


    if (currentSection === "new") {

        result = result.filter(
            brand => brand.type === "new"
        );

    }


    displayBrands(result);

}


// =============================================
// SEARCH EVENTS
// =============================================

searchInput.addEventListener(
    "input",
    filterBrands
);


searchButton.addEventListener(
    "click",
    filterBrands
);


// =============================================
// ALPHABET FILTER
// =============================================

const letters =
    document.querySelectorAll(".letter");


letters.forEach(letter => {

    letter.addEventListener(
        "click",
        function () {

            letters.forEach(item => {

                item.classList.remove("active");

            });


            this.classList.add("active");


            currentLetter =
                this.dataset.letter;


            filterBrands();

        }
    );

});


// =============================================
// SIDEBAR NAVIGATION
// =============================================

const sideNavigation =
    document.querySelectorAll(".side-nav");


sideNavigation.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            sideNavigation.forEach(item => {

                item.classList.remove("active");

            });


            this.classList.add("active");


            currentSection =
                this.dataset.section;


            filterBrands();

        }
    );

});


// =============================================
// CATEGORY FILTER
// =============================================

const categoryFilters =
    document.querySelectorAll(
        ".category-filter"
    );


categoryFilters.forEach(checkbox => {

    checkbox.addEventListener(
        "change",
        function () {

            selectedCategories =
                [...categoryFilters]

                .filter(
                    checkbox => checkbox.checked
                )

                .map(
                    checkbox => checkbox.value
                );


            filterBrands();

        }
    );

});


// =============================================
// SORT BRANDS
// =============================================

const sortOptions =
    document.querySelectorAll(
        'input[name="sort"]'
    );


sortOptions.forEach(option => {

    option.addEventListener(
        "change",
        function () {

            let sorted =
                [...brands];


            switch (this.value) {

                case "popularity":

                    sorted.sort(
                        (a, b) =>
                            b.popularity -
                            a.popularity
                    );

                    break;


                case "az":

                    sorted.sort(
                        (a, b) =>
                            a.name.localeCompare(
                                b.name
                            )
                    );

                    break;


                case "za":

                    sorted.sort(
                        (a, b) =>
                            b.name.localeCompare(
                                a.name
                            )
                    );

                    break;


                case "newest":

                    sorted.sort(
                        (a, b) =>
                            b.year -
                            a.year
                    );

                    break;

            }


            displayBrands(sorted);

        }
    );

});


// =============================================
// VIEW PRODUCTS
// =============================================

function addProductButtonEvents() {

    const buttons =
        document.querySelectorAll(
            ".view-products"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const brandId =
                    Number(
                        this.dataset.id
                    );


                const selectedBrand =
                    brands.find(
                        brand =>
                            brand.id === brandId
                    );


                if (!selectedBrand) return;


                /*
                    Later you can replace this
                    with your Shop page URL.

                    Example:

                    window.location.href =
                    `shop.html?brand=${selectedBrand.name}`;
                */


                alert(
                    `Opening products from ${selectedBrand.name}`
                );

            }
        );

    });

}


// =============================================
// FILTER TOGGLE
// =============================================

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
    function () {

        const isHidden =
            filterContent.style.display ===
            "none";


        if (isHidden) {

            filterContent.style.display =
                "block";

            this.textContent = "⌃";

        }

        else {

            filterContent.style.display =
                "none";

            this.textContent = "⌄";

        }

    }
);


// =============================================
// VIEW MORE CATEGORIES
// =============================================

const categoryViewMore =
    document.getElementById(
        "categoryViewMore"
    );


categoryViewMore.addEventListener(
    "click",
    function () {

        this.innerHTML =
            "View Less <span>⌃</span>";

        /*
            You can add additional
            categories here later.
        */

    }
);


// =============================================
// INITIAL DISPLAY
// =============================================

displayBrands(brands);