exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [{
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: [ "--headless" ]
        }
    }, {
        browserName: 'chrome',
        chromeOptions: {
            args: ['headless', 'disable-gpu']
        }
    }],
    jasmineNodeOpts: {
        showColors: true
    }
};