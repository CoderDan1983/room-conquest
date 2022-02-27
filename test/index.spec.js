const { expect } = require('chai');
const { findInArray } = require('../src/index.js');

describe('testing basic helper functions', function(){
    it('should be able to find 2 in the array [1,2,3]', function(){
        const result = findInArray([1,2,3], 2);
        expect(result).to.be.true;
    });

    it('should no be able to find 4 in the array [1,2,3]', function(){
        const result = findInArray([1,2,3], 4);
        expect(result).to.be.false;
    });
});