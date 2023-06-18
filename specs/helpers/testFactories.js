import FavoriteButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantDB from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantDB,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
