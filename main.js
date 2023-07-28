//* variables para la vista desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//* variables para la vista mobile
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//* variables para la option del carrito de compras
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const menuCarritoIcon = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
iconCarrito.addEventListener('click', toggleIconCarrito);

function toggleDesktopMenu() {
    menuCarritoIcon.classList.add("inactive");
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    menuCarritoIcon.classList.add("inactive");
}
function toggleIconCarrito() {
    //? si mobileMenu esta cerrado
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    // if (!isMobileMenuClosed) {
    //     mobileMenu.classList.add("inactive");
    // }
    menuCarritoIcon.classList.toggle('inactive');
    mobileMenu.classList.add("inactive");
}

const productList = [];
productList.push({
    name:"Bike",
    precio: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name:"Pantalla",
    precio: 220,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name:"Cocina",
    precio: 90,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name:"Skate",
    precio: 110,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// * Maquetacion html mediante JavaScript
function renderProducts(arr) {
    for (const producto of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', producto.image);

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