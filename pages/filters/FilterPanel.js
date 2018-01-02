let Filter = require('./Filter');

class FilterPanel extends Filter{

    constructor() {
        super(`#schema-filter`);
        this.filtersByType = $(by.css(`div#schema-filter div div.schema-filter__fieldset`));
    }

    setCheckboxFilter(type, ...values) {

        for (let filter of this.filtersByType) {

            if (filter.$(by.tagName(`span`)).getText() === type) {
                // console.log(`${filter.getText()}`);
                let rootFilter = filter.$(by.tagName(`ul`));

                values.forEach((value) => {
                    rootFilter.$(by.cssContainingText(`span`, value)).click();
                });
            }
        }
    }
}


module.exports = FilterPanel;
