let Page = require('../Page');

class AuthPage extends Page {

    constructor() {
        super('Auth Page');
        this.btnRegistration = $(by.css('div.auth-box__switcher-item + div'));
        // this.txbLogin = $(by.css("input[placeholder='Ник или e-mail']"));
        // this.txbPassword = $(by.css("input[placeholder='Пароль']"));
        this.linkForget = $(by.css(`[href="https://profile.onliner.by/login/lost"]`));
    }

    openAuthPage() {
        // browser.timeouts('implicit', 3000);
        browser.getAllWindowHandles()
            .then(function(handles){
            return browser.switchTo().window(handles[1]);
        })
            .catch(console.log.bind(console));
// browser.switchTo().window()
        // let curTabId = browser.getCur();
        // browser.switchTo(curTabId);
    }

    // get btnRegistration() {
    //     return browser.element('div.auth-box__switcher-item + div');
    // }
    //
    // get textBtnRegistration() {
    //     return this.btnRegistration.getText();
    // }
    //
    // get txbLogin() {
    //     return $("input[placeholder='Ник или e-mail']");
    // }
    //
    // set txbLogin(value) {
    //     this.txbLogin.setValue(value);
    // }
    //
    // get txbPassword() {
    //     return $("input[placeholder='Пароль']");
    // }
    //
    // set txbPassword(value) {
    //     this.txbPassword.setValue(value);
    // }
    //
    // get linkForget() {
    //     return $(`[href="https://profile.onliner.by/login/lost"]`);
    // }

    remind() {
        this.linkForget.click();
    }
}

module.exports = AuthPage;