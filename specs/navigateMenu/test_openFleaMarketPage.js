
let MainPage = require('../../pages/MainPage');
let FleaMarketPage = require('../../pages/navigateMenu/FleaMarketPage');

describe("Test opening flea market page", function() {

    it('should get title of flea market page', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.mainNavigation('Барахолка');

        let fleaMarketPage = new FleaMarketPage();
        // let title = fleaMarketPage.title;

        expect(fleaMarketPage.title).toEqual('Барахолка onliner.by - Главная страница');
    });
});