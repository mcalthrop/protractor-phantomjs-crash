/*global exports */

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    seleniumArgs: ['-browserTimeout=60'],
    specs: [
        './test-spec.js'
    ],
    multiCapabilities: [
/* Uncomment these to run tests in other browsers:
        { 'browserName': 'chrome' },
        { 'browserName': 'firefox' },
        { 'browserName': 'safari' },
*/
        {
            'browserName': 'phantomjs',
            'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
            'phantomjs.cli.args': ['--debug=false', '--webdriver-logfile=/tmp/webdriver.log', '--webdriver-loglevel=INFO']
//            'phantomjs.cli.args': ['--debug=true', '--webdriver-logfile=webdriver.log', '--webdriver-loglevel=DEBUG']     // alternative, with full debugging on
            // (loglevels supported: 'ERROR', 'WARN', 'INFO', 'DEBUG') (default 'INFO')
        }
    ],
    rootElement: 'body',
    framework: 'jasmine',
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    }
};
