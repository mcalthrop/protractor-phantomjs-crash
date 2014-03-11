describe('After repeated calls to driver.get()', function () {
    var location = 'http://mcalthrop.github.io/minimal.html',
        driver = browser.driver,
        numHits = 6;

    for (var i = 0; i < numHits; i++) {
        it('hit ' + i, function () {
            console.log('driver.get', location);
            driver.get(location);
        });
    }
});
