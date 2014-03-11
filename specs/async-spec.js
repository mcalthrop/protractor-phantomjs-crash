describe('showing failures with lots of page reloads and async calls', function () {
    it('fails after lots of reloads', function () {
        var location = 'http://mcalthrop.github.io/angularjs/minimal.html',
            driver = browser.driver;

        function trivialAsyncScript() {
            driver.executeAsyncScript(function () {
                var callback = arguments[0];
                setTimeout(function () {
                    callback();
                }, 500);
            });
        }

        for (var i = 0; i < 20; ++i) {
            browser.get(location);
            trivialAsyncScript();
        }
    });
});
