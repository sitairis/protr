let Filter = require('./Filter');

class FilterResults extends Filter {

    constructor() {
        super(`#schema-products`);
        this._items = $(by.className(`.schema-product.schema-product_narrow-sizes`));
    }


    get items() {
        return this._items;
    }

    getTitlesResults () {
        return this.items.$(by.className(`.schema-product__title`));
    }

}