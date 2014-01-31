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