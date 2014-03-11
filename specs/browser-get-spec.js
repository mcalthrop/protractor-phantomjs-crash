describe('After repeated calls to browser.get()', function () {
    var location = 'http://mcalthrop.github.io/angularjs/minimal.html',
        numHits = 6;

    for (var i = 0; i < numHits; i++) {
        it('hit ' + i, function () {
            console.log('browser.get', location);
            browser.get(location);
        });
    }
});
