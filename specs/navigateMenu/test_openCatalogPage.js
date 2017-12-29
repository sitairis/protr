
let MainPage = require('../../pages/MainPage');
let CatalogPage = require('../../pages/navigateMenu/CatalogPage');

describe("Test opening catalog page", function() {

    it('should get title of catalog page', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.mainNavigation('Каталог');

        let catalogPage = new CatalogPage();
        // let title = catalogPage.title;

        expect(catalogPage.title).toEqual('Каталог Onliner.by');
    });
});