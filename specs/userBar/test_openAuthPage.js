let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let AuthPage = require('../../pages/userBar/AuthPage');

describe("Test opening auth page", function() {
    it('should get text button', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.clickBtnAuthorization();

        let authPage = new AuthPage();
        authPage.openAuthPage();
        let result = authPage.btnRegistration.getText();

        expect(result).toEqual('Регистрация');
    });
});