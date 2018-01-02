class Filter {

    constructor (selector) {
        this._root = $(by.css(selector));
    }

    get root() {
        return this._root;
    }


}

module.exports = Filter;