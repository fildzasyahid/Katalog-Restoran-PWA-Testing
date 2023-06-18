class restaurantNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav>
        <div class="logo">
        <img class="logo" src="images/logo1.png" alt="logo batary" width="130px">
        </div>
        <button class="garis">
            <span ></span>
            <span ></span>
            <span ></span>
        </button>

        <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/fildza-syahid-134292268">About Us</a></li>
        </ul>
       
    </nav>`;
  }
}
customElements.define('restaurant-navbar', restaurantNavbar);
