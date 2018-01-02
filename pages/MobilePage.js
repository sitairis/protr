let Page = require('./Page');

class MobilePage extends Page {

    constructor() {
        super("Mobile Page");
        this.txbPriceTo = $(by.css(`input[@placeholder = 'до']`));
    }

    get title() {
        return browser.getTitle();
    }

}

module.exports = MobilePage;