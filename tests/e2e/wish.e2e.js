const { expect } = require("@wdio/globals");
const WishPage = require("../pages/wish.page");

describe("wishToggle", () => {
  it("should open item and toggle", async () => {
    await WishPage.open();
    await WishPage.toggleWish();
    await WishPage.toggleItem();
    await expect(WishPage.popUp).not.toBeExisting();
  });
  it("should open wishlist and remove", async () => {
    await WishPage.open();
    await WishPage.toggleWish();
    await WishPage.toggleItem();
    await WishPage.openWishList();
    await WishPage.removeWish();
    await expect(WishPage.emptyWish).toBeExisting();
  });
});
