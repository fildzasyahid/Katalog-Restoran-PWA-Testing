import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../template/template-creator';

const restaurantFavorite = {
  async render() {
    return `
      <div class="content">
        <h1 class="favorite-heading">Restaurant Favorite</h1>
        <div id="resto-favorite" class="card_list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restoRender = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.card_list');

    if (restoRender.length === 0) {
      restaurantsContainer.innerHTML = `
      <h3 class="nothing">Belum terdapat restoran favorit.</h3>
      `;
    } else {
      const totalRest = restoRender.length;

      restoRender.forEach((restaurant, index) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant, index, totalRest);
      });
    }
  },
};

export default restaurantFavorite;
