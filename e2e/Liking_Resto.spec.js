const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
  I.wait(3);
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement("#resto-favorite");
  I.see("Belum terdapat restoran favorit.", "#resto-favorite");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.wait(3);
  I.see("Belum terdapat restoran favorit.", "#resto-favorite");
  I.amOnPage("/");
  I.waitForElement(".card", 10);
  I.seeElement(".card");
  const firstRestaurant = locate(".card").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);
  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");
  I.wait(3);
  I.amOnPage("/#/favorite");
  I.wait(3);
  I.seeElement(".card");
  const likedRestaurantName = await I.grabTextFrom(".card");
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});