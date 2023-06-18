// eslint-disable-next-line import/extensions
import CONFIG from '../../globals/config.js';

const createRestoItemTemplate = (data) => `
<a class="card" href="./#/detail/${data.id}">
  <div class="card_item">
    <div class="thumb_container">
      <img class="card_thumb lazyload" data-src="${data.pictureId ? CONFIG.BASE_IMAGE_URL + data.pictureId : 'images/heros/hero-image_2.jpg'}" crossorigin="anonymous" alt="${data.name}">
    </div>
    <div class="kota">${data.city}</div>
    <div class="card_content">
      <div class="card_title">${data.name}</div>
      <div class="card_description">${data.description.slice(0, 150)}...</div>
      <div class="card_rating">
        <span class="rating-star">&starf;</span>
        <span class="rating-value">${data.rating}</span>
      </div>
    </div>
  </div>
</a>
`;

const createRestoDetailTemplate = (data) => `
  <div class="detail">
  <div class="image" id="image">
  <img class="image-detail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" crossorigin="anonymous" alt="${data.name}" />
  </div>
  <div class="deskripsi">
  <h1 class="detail-title" id="data-title"> ${data.name} </h1>
  
  <div class="info">
      <ul>
        <li>
          <h3>City</h3>
          <p>${data.city}</p>
        </li>
        <li>
          <h3>Address</h3>
          <p>${data.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${data.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${data.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${data.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="description">
      <h2>Description</h2>
      <p>${data.description}</p>
    </div>
  </div>
  </div>
`;

const createRestoReviewTemplate = (ulasan) => `
  <div class="review">
    <p>
    <span class="name">${ulasan.name}</span> &bull; <span class="date">${ulasan.date}</span>
    </p>
    <p class="komen">${ulasan.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
