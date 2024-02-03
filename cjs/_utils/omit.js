'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function omit(obj, keys) {
    const clone = Object.assign({}, obj);
    keys.forEach(key => {
        if (key in clone) {
            delete clone[key];
        }
    });
    return clone;
}

exports.default = omit;
