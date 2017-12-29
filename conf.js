exports.config = {
    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    // specs: ['spec.js'],
onPrepare: function () {
    browser.waitForAngularEnabled(false);
},
    suites: {
        suite1: [
            './specs/catalogMobile/*.js'
        ],
        suite2: [
            './specs/navigateMenu/*.js'
        ],
        suite3: [
            './specs/search/*.js'
        ],
        suite4: [
            './specs/userBar/*.js'
        ]
    },
    capabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: [ "--headless" ]
        }
    },
    // multiCapabilities: [{
    //     browserName: 'firefox',
    //     'moz:firefoxOptions': {
    //         args: [ "--headless" ]
    //     }
    // }, {
    //     browserName: 'chrome',
    //     chromeOptions: {
    //         args: ['headless', 'disable-gpu']
    //     }
    // }],

    jasmineNodeOpts: {
        showColors: true
    }
};