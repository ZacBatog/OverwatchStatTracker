var webdriverio = require('webdriverio');

function elimDeath(mode) {
    var elimsPerDeath;

    elimsPerDeath = browser.element(mode).element('#overwatch.guid.0x08600000000003D2').element('data-hero-guid="0x02E000000000012F"').getText('class="description"');

    console.log(elimsPerDeath);

    return elimsPerDeath;
};

describe('Get Doomfist Stats', function () {

    it('Competitive', function () {
        browser.url('https://playoverwatch.com/en-us/career/pc/us/Darth-11366');

        browser.leftClick('href="#competitive"');

        var stats;

        stats[0] = elimDeath("'#quickplay'");
    });

    it('Quickplay', function () {
        browser.url('https://playoverwatch.com/en-us/career/pc/us/Darth-11366');

        var stats;

        stats[0] = elimDeath("'#competitive'");

    });
});