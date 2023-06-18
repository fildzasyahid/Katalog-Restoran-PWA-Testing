const { expect } = require('chai');

const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the Restaurant that has been added', async () => {
    await favoriteRestaurant.putRestaurant({ id: 1 });
    await favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1))
      .to.deep.equal({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2))
      .to.deep.equal({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3))
      .to.be.undefined;
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    await favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants())
      .to.deep.equal([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    await favoriteRestaurant.putRestaurant({ id: 1 });
    await favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurants())
      .to.deep.equal([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite Restaurant', async () => {
    await favoriteRestaurant.putRestaurant({ id: 1 });
    await favoriteRestaurant.putRestaurant({ id: 2 });
    await favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .to.deep.equal([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    await favoriteRestaurant.putRestaurant({ id: 1 });
    await favoriteRestaurant.putRestaurant({ id: 2 });
    await favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getAllRestaurants())
      .to.deep.equal([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

module.exports = { itActsAsFavoriteRestaurantModel };
