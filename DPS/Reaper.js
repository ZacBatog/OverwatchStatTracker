var webdriverio = require('webdriverio');

function elimDeath(mode) {
    var elimsPerDeath;

    elimsPerDeath = browser.element(mode).element('data-category-id="overwatch.guid.0x08600000000003D2"').element('data-hero-guid="0x02E0000000000002"').getText('class="description"');

    console.log(elimsPerDeath);

    return elimsPerDeath;
};

function weaponAccuracy(mode) {
    var accuracy;

    accuracy = browser.element(mode).element('data-category-id="overwatch.guid.0x086000000000002F"').element('data-hero-guid="0x02E0000000000002"').getText('class="description"');

    console.log(accuracy);

    return accuracy;
};

describe('Get Reaper Stats', function () {

    it('Competitive', function () {
        browser.url('https://playoverwatch.com/en-us/career/pc/us/Darth-11366');

        browser.leftClick('href="#competitive"');

        var stats;

        stats[0] = elimDeath("'#competitive'");
        stats[0] = weaponAccuracy("'#competitive'");

    });

    it('Quickplay', function () {
        browser.url('https://playoverwatch.com/en-us/career/pc/us/Darth-11366');

        var stats;

        stats[0] = elimDeath("'#quickplay'");
        stats[1] = weaponAccuracy("'#quickplay'");

    });
});