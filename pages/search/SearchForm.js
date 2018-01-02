class searchForm {

    constructor() {
        this._title = 'Search Form';
        this.item = $(by.css(`div.product__title + a`));
    }

    isPausedItemName() {
        return  this.item.isPaused();
    }

}

module.exports = searchForm;
