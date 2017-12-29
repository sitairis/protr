class searchForm {

    constructor() {
        this._title = 'Search Form';
    }

    isPausedItemName() {
        return  element(by.css(`div.product__title + a`)).isPaused();
    }

}

module.exports = searchForm;
