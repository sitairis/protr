let Page = require('./Page');

class MainPage extends Page {

    constructor() {
        super('Main Page');
        this.lnkMobileCatalog = $(`[href='https://catalog.onliner.by/mobile']`);
        this.navigateMenu = $(`ul.b-main-navigation`);
        this.txbSearch = $(`input.fast-search__input`);
        this.btnAuthorization = $(`div#userbar div div`);
    }

    mainNavigation(name) {
        this.navigateMenu.$(by.cssContainingText(`span`, name)).click();
    }

    open() {
        super.open(`https://www.onliner.by/`);
    }

    clickLnkMobileCatalog() {
        this.lnkMobileCatalog.click();
    }

    clickBtnAuthorization() {
        return this.btnAuthorization.click();
    }

    typeTxbSearch(value) {
        this.txbSearch.set(value);
    }

    prepareFirstSearch(value) {
        this.typeTxbSearch(value);

        browser.switchTo().frame($(by.css('iframe.modal-iframe')).getWebElement());

    }

}

module.exports = MainPage;
