class RestaurantFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Footer Icon -->
    <section class="ft-sosmed">
      <ul class="ft-sosmed-list">
        <li><a href="https://www.instagram.com/fildzasyahid"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/in/fildza-syahid-134292268"><i class="fab fa-linkedin"></i></a></li>
      </ul>
      <ul>
        <li class="watermark">Madangin - Copyright © 2023</li>
      </ul>
    </section>
         `;
  }
}
customElements.define('restaurant-footer', RestaurantFooter);
