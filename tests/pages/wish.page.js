const { $,$$ ,browser} = require("@wdio/globals");
const Page = require("./page");

class WishPage extends Page {
  get wishBtn() {
    return $("#button-wish");
  }
  get popUp() {
    return $("#popup-button");
  }
  get sizeId() {
    return $("#size-id");
  }
  get productWishBtn() {
    return $("#product-wish-btn");
  }
  get wishList() {
    return $("#wish-list");
  }
  get wishItems(){
    return browser.react$$('WishListItem')
  }
  get removeBtnWish(){
    return $('#wish-remove');
  }
  get emptyWish(){
    return $('h2[data-testid="empty-wish"]');
  }
 
  async toggleWish(){
    await this.wishBtn.click();
    await this.popUp.click();
  }
  async toggleItem() {
    await this.sizeId.click();
    await this.productWishBtn.click();
 
  }
  async openWishList() {
    await this.wishList.click();
  }
  async removeWish(){
    // const wishProducts = await this.wishItems;
    // if(!wishProducts){
    //   throw new Error('There are no products in the list')
    // }
    await this.removeBtnWish.click()
  }
  open() {
    return super.open("/items");
  }
}

module.exports = new WishPage();
