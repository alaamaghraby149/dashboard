const productFavIcon = document.querySelectorAll('.product-favIcon')
const productCards = document.querySelectorAll('.product__card')

/*============== LOCAL STORAGE ==============*/
const FAVORITES_KEY = "favorites";

function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}
function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
/*============== HAVING FAVORITE PRODUCT ==============*/
let favorites = getFavorites()
function favoriteProducts(e) {
    let productId = e.currentTarget.closest('.product__card').dataset.id

    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId)
    } else {
        favorites.push(productId)
    }
    saveFavorites(favorites)
}

productFavIcon.forEach(product => {
    let productId = product.closest('.product__card').dataset.id;

    if (favorites.includes(productId)) {
        product.classList.add('active');
    }
});
/*============== EVENT LISTENER ==============*/
productFavIcon.forEach(product => {
    product.addEventListener('click', () => {
        product.classList.toggle('active')
    })
    product.addEventListener('click', favoriteProducts)
})
/*============== RENDER FAVORITE PRODUCTS ==============*/
let products = []
const path = window.location.pathname;
let productCardsContainer = document.querySelector('.product-cards')
fetch('/data/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        if (path.endsWith("/pages/favorites.html")) {
            renderFavoriteProducts(products);
        }

    }
    )
    .catch(error => console.log("error: ", error))


function renderFavoriteProducts(products) {
    let filteredProducts = products.filter(product =>
        favorites.includes(product.id)
    )
    productCardsContainer.innerHTML = ''
    filteredProducts.forEach(product => {
        productCardsContainer.innerHTML += `
                            <div data-id="${product.id}" class="product product__card ">
                            <!-- the first part -->
                            <div class="swiper cardSwiper   relative rounded-[12px] ">
                                <div class="swiper-wrapper w-full ">
                                    <!-- Slides -->
                                    <div class="swiper-slide  w-full">
                                        <img class="w-full dark:hidden" src="${product.imageLight}" alt="">
                                        <img class="w-full hidden dark:block" src="${product.imageDark}" alt="">
                                    </div>
                                    <div class="swiper-slide">
                                        <img class="w-full dark:hidden" src="${product.imageLight}" alt="">
                                        <img class="w-full hidden dark:block" src="${product.imageDark}" alt="">
                                    </div>
                                </div>
                                <!-- If we need navigation buttons -->
                                <div class="swiper-button-next absolute card-next right-0"><i class="fa-solid fa-angle-right dark:text-white text-text-swiperbtntext"></i></div>
                                <div class="swiper-button-prev absolute card-prev left-0"><i class="fa-solid fa-angle-left dark:text-white text-text-swiperbtntext"></i></div>
                            </div>
                            <!-- the second part -->
                            <div class="product-details flex justify-between
                            my-3 ml-3 mr-[6.5px]
                            md:my-6  md:ml-6 md:mr-[13px]  ">
                                <div class="flex flex-col gap-1 md:gap-2">
                                    <p class="product-subtitle ">${product.title}</p>
                                    <p class="product-price ">${product.price}</p>
                                    <p class="product-rate ">
                                        <i class="fa-solid fa-star text-text-rate"></i>
                                        <i class="fa-solid fa-star text-text-rate"></i>
                                        <i class="fa-solid fa-star text-text-rate"></i>
                                        <i class="fa-solid fa-star text-text-rate"></i>
                                        <i class="fa-solid fa-star opacity-50"></i>
                                        <span class="ml-[2px] opacity-50 dark:text-white">(131)</span>
                                    </p>
                                    <a class="modify-product__btn ">Edit Product</a>
                                </div>
                                <div class="product-favIcon active  hover:scale-105 transition-all ">
                                    <i class="fa-regular fa-heart "></i>
                                </div>
                            </div>
                        </div>
        
        `
    })
}







