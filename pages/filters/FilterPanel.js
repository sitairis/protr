
class FilterPanel {

    constructor() {
        this._root = element(by.css(`#schema-filter`));
    }

    get root() {
        return this._root;
    }

    setCheckboxFilter(type, ...values) {

        let filtersByType = element(by.css(`div#schema-filter div div.schema-filter__fieldset`));

        for (let filter of filtersByType) {

            if (filter.$(by.tagName(`span`)).getText() === type) {
                // console.log(`${filter.getText()}`);
                let rootFilter = filter.$(by.tagName(`ul`));

                values.forEach((value) => {
                    rootFilter.element(by.cssContainingText(`span`, value)).click();
                });
            }
        }
    }
}


module.exports = FilterPanel;
