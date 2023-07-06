function navbar(){
    return `<nav>
    <div>
        <img src="../images/logo.png" alt="">
    </div>
    <div>
        <a href="#">Downlaod App</a>
        <a href="#">Partner With Us</a>
        <a href="#">Installment</a>
        <a href="#">Saved</a>
        <a href="#">My Booking</a>
    </div>
    <div id="last">
        <ion-icon name="person-circle-outline"></ion-icon>
        <a href="#">Register</a>
    </div>

    <div>
        <p id="menu"><ion-icon name="menu-outline"></ion-icon></p>
    </div>

</nav>`
}

function menuBar(){
    return `<div>
    <p id="close"><ion-icon name="close-circle-outline"></ion-icon></p>
    <a href="#">Downlaod App</a>
    <a href="#">Partner With Us</a>
    <a href="#">Installment</a>
    <a href="#">Saved</a>
    <a href="#">My Booking</a>
    <a href="#"><ion-icon name="person-circle-outline"></ion-icon>Register</a>
</div>`
}

function footer(){
    return `<div class="foot">
    <div class="f1">
        <img src="../images/logo.png" alt="">
        <p>Convenience is our priority to satisfy our customers, and we provide all the features you can easily and quickly.</p>
    </div>
    <div class="f2">
        <div>
            <h3>About</h3>
            <p>How to Back</p>
            <p>Contact Us</p>
            <p>Help Center</p>
        </div>
        <div>
            <h3>Products</h3>
            <p>destination</p>
            <p>Flight</p>
            <p>Lodging</p>
        </div>
        <div>
            <h3>Social</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
    </div>
</div>
<hr class="lastHR">
<div class="final">
    <p>Privacy Policy</p>
    <p>Copyright &#169;2023 Alcazar </p>
</div>`
}
export {navbar, menuBar, footer}