//* variables para la vista desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//* variables para la vista mobile
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//* variables para la option del carrito de compras
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const menuCarritoIcon = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
iconCarrito.addEventListener('click', toggleIconCarrito);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    menuCarritoIcon.classList.add("inactive");
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
    desktopMenu.classList.add("inactive");
}