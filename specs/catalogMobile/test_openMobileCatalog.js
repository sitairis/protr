let MainPage = require('../../pages/MainPage');
let MobilePage = require('../../pages/MobilePage');

describe("Test opening mobile catalog", function() {

    it("should open mobile catalog", function () {
        let mainPage = new MainPage();

        mainPage.open();
        mainPage.clickLnkMobileCatalog();

        let mobilePage = new MobilePage();
        mobilePage.open();

        expect(mobilePage.title).toEqual('Мобильный телефон купить в Минске');

    });

});
