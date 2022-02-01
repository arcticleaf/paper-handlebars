'use strict';

const factory = () => {
    return function(string) {
        if (typeof string !== 'string') {
            return string;
        }

        return string.toUpperCase();
    };
};

module.exports = [{
    name: 'toUpperCase',
    factory: factory,
}];
