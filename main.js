//* variables para la vista desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//* variables para la vista mobile
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//* variables para la option del carrito de compras
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
iconCarrito.addEventListener('click', toggleIconCarrito);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}
function toggleIconCarrito() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}
function openProductDetailAside() {
    productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

const productList = [];
productList.push({
    name:"Bike",
    precio: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descrip: "Esto es la primera prueba"
});
productList.push({
    name:"Pantalla",
    precio: 220,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descrip: "Esto es la segunda prueba"
});
productList.push({
    name:"Cocina",
    precio: 90,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descrip: "Esto es la tercera prueba"
});
productList.push({
    name:"Skate",
    precio: 110,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descrip: "Esto es la cuarta prueba"
});

// * Maquetacion html mediante JavaScript(shoppingCartContainer)
function renderProducts(arr) {
    for (const producto of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', producto.image);
        img.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const infoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.precio;
        const productName = document.createElement('p');
        productName.innerText += producto.name;

        infoDiv.append(productPrice, productName);

        const infoFigure = document.createElement('figure');
        const iconFigure = document.createElement('img');
        iconFigure.setAttribute('src', './icons/bt_add_to_cart.svg')

        infoFigure.appendChild(iconFigure);

        productInfo.append(infoDiv, infoFigure);
        productCard.append(img, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);