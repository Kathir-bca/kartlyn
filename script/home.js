
let menuBtn = document.querySelector('.js-menu-btn');
let isOpen = false ;

menuBtn.addEventListener('click',()  => {
    let sideBar = document.querySelector('.js-side-bar');
    
    if(!isOpen){
        menuBtn.style.color = '#1d4ed8'
        sideBar.classList.add('side-bar-show');
        isOpen = true;
    }else{
        menuBtn.style.color = 'black'
        sideBar.classList.remove('side-bar-show');
        isOpen = false;
    } 
});

// const products = [

//     {
//         name: "Realme 10 Pro 5G (Nebula Blue, 128 G8)",
//         price: "₹19,999",
//         oldPrice: "₹22,999",
//         image: "images/realme.png",
//         rating: 4.5,
//         discount: "-13%"
//     },

//     {
//         name: "The Souled Store One Piece T-Shirts for",
//         price: "₹1,899",
//         oldPrice: "₹2.599",
//         image: "images/onepiece.png",
//         rating: 4.8,
//         discount: "-27%"
//     },

//     {
//         name: "MICROSOFT Surface Laptop SD X2 Elite",
//         price: "₹34,990",
//         oldPrice: "₹50,000",
//         image: "images/laptop.png",
//         rating: 4.6,
//         discount: "-30%"
//     },

//     {
//         name: "Infinix 109 Cm 43 Inch Qled Ultra Hd 4k",
//         price: "₹19,499",
//         oldPrice: "₹29,999",
//         image: "images/tv1.png",
//         rating: 4.3,
//         discount: "-35%"
//     },

//     {
//         name: "Nike Mens Precision Mid Basketball Shoes",
//         price: "₹5,999",
//         oldPrice: "₹7,999",
//         image: "images/shoe.png",
//         rating: 4.4,
//         discount: "-25%"
//     }

// ];

// const productsContainer = document.getElementById("products");

// products.forEach(product => {

//     productsContainer.innerHTML += `

// <div class="card">

// <span class="discount">${product.discount}</span>

// <span class="fav">♡</span>

// <img src="${product.image}">

// <h3>${product.name}</h3>

// <div>

// <span class="price">${product.price}</span>

// <span class="old">${product.oldPrice}</span>

// </div>

// <p class="rating">
// ★★★★★ <span>(${product.rating})</span>
// </p>

// </div>

// `;

// });



// // For Electronic Products


// const eProducts = [

//     {
//         name: "ASUS ROG Strix G16, AMD Ryzen 9, Gaming Laptop",
//         price: "₹1,39,999",
//         oldPrice: "₹1,83,990",
//         image: "images/rog.png",
//         rating: 4.5,
//         discount: "-23%"
//     },

//     {
//         name: "Sony Bravia Theatre Quad (HT-A9M2) Premium",
//         price: "₹1,89,999",
//         oldPrice: "₹2,49,990",
//         image: "images/home T.png",
//         rating: 4.6,
//         discount: "-24%"
//     },

//     {
//         name: "Noise Fit Halo Plus Smart Watch",
//         price: "₹3,695",
//         oldPrice: "₹8,999",
//         image: "images/watch.png",
//         rating: 4.8,
//         discount: "-42%"
//     },

//     {
//         name: "Sony WH-CH720N, Wireless Haedphones with Mic",
//         price: "₹6,150",
//         oldPrice: "₹9,450",
//         image: "images/hphone.png",
//         rating: 4.6,
//         discount: "-35%"
//     },

//     {
//         name: "IQOO 15 5G (Legend, 256 GB) (12 GB RAM)",
//         price: "₹55,439",
//         oldPrice: "₹76,999",
//         image: "images/iqoo.webp",
//         rating: 4.7,
//         discount: "-28%"
//     }

// ];

// const eProductsContainer = document.getElementById("eProducts");

// eProducts.forEach(product => {

//     eProductsContainer.innerHTML += `

// <div class="card">

// <span class="discount">${product.discount}</span>

// <span class="fav">♡</span>

// <img src="${product.image}">

// <h3>${product.name}</h3>

// <div>

// <span class="price">${product.price}</span>

// <span class="old">${product.oldPrice}</span>

// </div>

// <p class="rating">
// ★★★★★ <span>(${product.rating})</span>
// </p>

// </div>

// `;

// });


const homeProducts = allProducts.filter((product) => product.source === "home");


// Single reusable render function — pass category + target container id
function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    const filtered = homeProducts.filter(p => p.category === category);

    container.innerHTML = filtered.map(product => `
        <div class="card" data-id="${product.id}">
            <span class="discount">${product.discount}</span>
            <span class="fav">♡</span>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div>
                <span class="price">${product.price}</span>
                <span class="old">${product.oldPrice}</span>
            </div>
            <p class="rating">★★★★★ <span>(${product.rating})</span></p>
        </div>
    `).join("");
}

renderProducts("general", "products");
renderProducts("electronics", "eProducts");



const brands = document.getElementById("brands");

function scrollRightBtn() {
    brands.scrollBy({
        left: 250,
        behavior: "smooth"
    });
}

function scrollLeftBtn() {
    brands.scrollBy({
        left: -250,
        behavior: "smooth"
    });
}