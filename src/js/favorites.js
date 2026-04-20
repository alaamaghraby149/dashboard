const productFavIcon = document.querySelectorAll('.product-favIcon')
let favorites = []
productFavIcon.forEach(product=> {
    product.addEventListener('click',()=>{
        product.classList.toggle('active')
    })
    product.addEventListener('click',favoriteProducts)
})
function favoriteProducts(e){
    let product = e.currentTarget.closest('.product__card').dataset.id
    console.log(product)
}

//click on favIcon => having the product by access to his id , add to favorite 