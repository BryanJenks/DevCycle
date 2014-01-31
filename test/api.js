/**
 * Created by BryanJ on 1/31/14.
 */

/**
 * @api {get} /api/double Doubles the value of a *number*
 * @apiName double
 * @apiGroup api
 */
exports.double = function (value) {
    if (typeof value === 'number') {
        return value * 2;
    } else {
        throw new Error('Expected a number');
    }
};

/**
 * @api {get} /api/triple Triples the value of a *number*
 * @apiName triple
 * @apiGroup api
 */
exports.triple = function (value) {
    if (typeof value === 'number') {
        return value * 3;
    } else {
        throw new Error('Expected a number');
    }
};


/**
 * @api {get} /api/quadruple quadruples the value of a *number*
 * @apiName quadruple
 * @apiGroup api
 */
exports.quadruple = function (value) {
    if (typeof value === 'number') {
        return value * 4;
    } else {
        throw new Error('Expected a number');
    }
};