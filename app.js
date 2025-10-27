'use strict';

function validateVariableName(variableName, value) {
    if (variableName.length < 1 || variableName.length > 30) {
        throw new Error('Unexpected variable lenght');
    }

    function isValidJSVariableName(name) {
        const identifierPattern = /^;
    }
}

console.log(validateVariableName('zlo'));