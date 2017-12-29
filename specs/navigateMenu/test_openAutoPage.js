
let MainPage = require('../../pages/MainPage');
let AutoPage = require('../../pages/navigateMenu/AutoPage');

describe("Test opening auto page", function() {


    it('should get title of auto page', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.mainNavigation('Автобарахолка');

        let autoPage = new AutoPage();

        expect(autoPage.title).toEqual('Купить авто в Минске, продажа подержанных, новых автомобилей - Автобарахолка');
    });
});