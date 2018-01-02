
let MainPage = require('../../pages/MainPage');
let SearchForm = require('../../pages/search/SearchForm');


describe("Test search line", function() {

    it('should find something', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.prepareFirstSearch(`Xiaomi`);

        let searchForm = new SearchForm();

        let result = searchForm.isPausedItemName();

        expect(result).toEqual(true);
    });
});
