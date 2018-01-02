let MainPage = require('../../pages/MainPage');
let MobilePage = require('../../pages/MobilePage');
let FilterPanel = require(`../../pages/filters/FilterPanel`);
let FilterResults = require(`../../pages/filters/FilterResults`);

describe("Test mobile filter", function() {

    it('should get list titles of phones', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.clickLnkMobileCatalog();

        let mobilePage = new MobilePage();

        let filterPanel = new FilterPanel();
        filterPanel.setCheckboxFilter(`Производитель`, `Xiaomi`);
        mobilePage.txbPriceTo.setValue(`400`);

        // browser.timeouts('implicit', 1000);
        let filterResults = new FilterResults();

        let resultsTitles = filterResults.getTitlesResults();

        resultsTitles.forEach((title) => {
            expect(title).toContain(`Xiaomi`);
        });
    });
});
