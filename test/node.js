describe('Node.js', function() {
    global.chai = require('chai');

    before(() => {
        global.argon2 = require('..');
    });

    ['./suite/hash', './suite/verify'].forEach((name) => {
        delete require.cache[require.resolve(name)];
        require(name);
    });
});
