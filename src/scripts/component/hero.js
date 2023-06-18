class restaurantHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="hero">
        <h1  tabindex="0">Madangin</h1>
        <p  tabindex="0">Temukan Restoran Favorit Anda</p>
      </div>`;
  }
}
customElements.define('restaurant-hero', restaurantHero);
