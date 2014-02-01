/** Created by BryanJ on 1/31/14. */

var api = require('../test/api');

exports['double test'] = function(test) {
    test.equal(api.double(2), 4);
    test.equal(api.double(3), 6);
    test.equal(api.double(-4), -8);
    test.throws(function () { api.double(); });
    test.throws(function () { api.double(null); });
    test.throws(function () { api.double(true); });
    test.throws(function () { api.double([]); });
    test.throws(function () { api.double({}); });
    test.throws(function () { api.double('asdf'); });
    test.throws(function () { api.double('123'); });
    test.done();
};

