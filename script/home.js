const menuBtn = document.querySelector(".allCate");
const sidebar = document.querySelector(".side-bar");
const sliderViewport = document.querySelector(".slider-viewport");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
    if (sidebar.classList.contains("hide")) {
        sliderViewport.style.width = "103%";
    } else {
        sliderViewport.style.width = "1013px";
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector("[data-slider]");

    if (!slider) {
        return;
    }

    const track = slider.querySelector("[data-track]");
    const slides = Array.from(slider.querySelectorAll("[data-slide]"));
    const dotsContainer = slider.querySelector("[data-dots]");
    const previousButton = slider.querySelector("[data-prev]");
    const nextButton = slider.querySelector("[data-next]");

    if (!track || slides.length === 0) {
        return;
    }

    let currentSlide = 0;
    let autoplayTimer = null;
    let touchStartX = 0;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Create the dots automatically
    slides.forEach((slide, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "slider-dot";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

        dot.addEventListener("click", () => {
            showSlide(index);
        });

        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(
        dotsContainer.querySelectorAll(".slider-dot")
    );

    function showSlide(index, restartAutoplay = true) {
        currentSlide = (index + slides.length) % slides.length;

        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentSlide;

            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
        });

        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === currentSlide;

            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-selected", String(isActive));
        });

        if (restartAutoplay) {
            startAutoplay();
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoplay() {
        if (reducedMotion || slides.length < 2) {
            return;
        }

        stopAutoplay();

        autoplayTimer = setInterval(() => {
            showSlide(currentSlide + 1, false);
        }, 5000);
    }

    function stopAutoplay() {
        if (autoplayTimer !== null) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    nextButton.addEventListener("click", nextSlide);
    previousButton.addEventListener("click", previousSlide);

    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);

    slider.addEventListener("focusin", stopAutoplay);

    slider.addEventListener("focusout", event => {
        if (!slider.contains(event.relatedTarget)) {
            startAutoplay();
        }
    });

    slider.addEventListener("keydown", event => {
        if (event.key === "ArrowRight") {
            nextSlide();
        }

        if (event.key === "ArrowLeft") {
            previousSlide();
        }
    });

    track.addEventListener("pointerdown", event => {
        touchStartX = event.clientX;
    });

    track.addEventListener("pointerup", event => {
        const touchEndX = event.clientX;
        const distance = touchEndX - touchStartX;

        if (Math.abs(distance) < 50) {
            return;
        }

        if (distance < 0) {
            nextSlide();
        } else {
            previousSlide();
        }
    });

    showSlide(0, false);
    startAutoplay();
});

const products = [

    {
        name: "Realme 10 Pro 5G (Nebula Blue, 128 G8)",
        price: "₹19,999",
        oldPrice: "₹22,999",
        image: "images/realme.png",
        rating: 4.5,
        discount: "-13%"
    },

    {
        name: "The Souled Store One Piece T-Shirts for",
        price: "₹1,899",
        oldPrice: "₹2.599",
        image: "images/onepiece.png",
        rating: 4.8,
        discount: "-27%"
    },

    {
        name: "MICROSOFT Surface Laptop SD X2 Elite",
        price: "₹34,990",
        oldPrice: "₹50,000",
        image: "images/laptop.png",
        rating: 4.6,
        discount: "-30%"
    },

    {
        name: "Infinix 109 Cm 43 Inch Qled Ultra Hd 4k",
        price: "₹19,499",
        oldPrice: "₹29,999",
        image: "images/tv1.png",
        rating: 4.3,
        discount: "-35%"
    },

    {
        name: "Nike Mens Precision Mid Basketball Shoes",
        price: "₹5,999",
        oldPrice: "₹7,999",
        image: "images/shoe.png",
        rating: 4.4,
        discount: "-25%"
    }

];

const productsContainer = document.getElementById("products");

products.forEach(product => {

    productsContainer.innerHTML += `

<div class="card">

<span class="discount">${product.discount}</span>

<span class="fav">♡</span>

<img src="${product.image}">

<h3>${product.name}</h3>

<div>

<span class="price">${product.price}</span>

<span class="old">${product.oldPrice}</span>

</div>

<p class="rating">
★★★★★ <span>(${product.rating})</span>
</p>

</div>

`;

});



// For Electronic Products


const eProducts = [

    {
        name: "ASUS ROG Strix G16, AMD Ryzen 9, Gaming Laptop",
        price: "₹1,39,999",
        oldPrice: "₹1,83,990",
        image: "images/rog.png",
        rating: 4.5,
        discount: "-23%"
    },

    {
        name: "Sony Bravia Theatre Quad (HT-A9M2) Premium",
        price: "₹1,89,999",
        oldPrice: "₹2,49,990",
        image: "images/home T.png",
        rating: 4.6,
        discount: "-24%"
    },

    {
        name: "Noise Fit Halo Plus Smart Watch",
        price: "₹3,695",
        oldPrice: "₹8,999",
        image: "images/watch.png",
        rating: 4.8,
        discount: "-42%"
    },

    {
        name: "Sony WH-CH720N, Wireless Haedphones with Mic",
        price: "₹6,150",
        oldPrice: "₹9,450",
        image: "images/hphone.png",
        rating: 4.6,
        discount: "-35%"
    },

    {
        name: "IQOO 15 5G (Legend, 256 GB) (12 GB RAM)",
        price: "₹55,439",
        oldPrice: "₹76,999",
        image: "images/iqoo.webp",
        rating: 4.7,
        discount: "-28%"
    }

];

const eProductsContainer = document.getElementById("eProducts");

eProducts.forEach(product => {

    eProductsContainer.innerHTML += `

<div class="card">

<span class="discount">${product.discount}</span>

<span class="fav">♡</span>

<img src="${product.image}">

<h3>${product.name}</h3>

<div>

<span class="price">${product.price}</span>

<span class="old">${product.oldPrice}</span>

</div>

<p class="rating">
★★★★★ <span>(${product.rating})</span>
</p>

</div>

`;

});




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