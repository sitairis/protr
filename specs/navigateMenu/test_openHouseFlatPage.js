
let MainPage = require('../../pages/MainPage');
let HouseFlatPage = require('../../pages/navigateMenu/HouseFlatPage');

describe("Test opening houses and flats page", function() {

    it('should get title of houses and flats page', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.mainNavigation('Дома и квартиры');

        let houseFlatPage = new HouseFlatPage();
        // let title = houseFlatPage.title;

        expect(houseFlatPage.title).toEqual('Купить квартиру в Минске');
    });
});