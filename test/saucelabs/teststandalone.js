var webdriverio = require('webdriverio'),
    expect = require('chai').expect;

describe('Compodoc page', function() {
    return it('should get the title', function(done) {

        var client = webdriverio.remote({
                desiredCapabilities: {
                    browserName: 'chrome',
                    version: '56',
                    platform: 'WIN7',
                    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                    name: 'Compodoc test',
                    'public': true,
                    build: process.env.TRAVIS_BUILD_NUMBER
                },
                host: 'ondemand.saucelabs.com',
                port: 80,
                user: process.env.SAUCE_USERNAME,
                key: process.env.SAUCE_ACCESS_KEY,
                logLevel: 'verbose'
            }).init();

        return client
            .url('http://127.0.0.1:8383')
            .getTitle(function(err, title) {
                console.log(title);
                expect(title).to.equal('compodoc documentation');
                return done();
            })
            .end();
    });
});
