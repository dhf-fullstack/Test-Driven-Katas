const { expect } = require('chai');
const wrap = require('./wrap');

describe ('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
    })
    it('Returns string if less than maxCol', () => {
        const sentence = 'green acres is the place to be';
        const maxCol = sentence.length;
        expect(wrap(sentence, maxCol)).to.equal(sentence);
        expect(wrap(sentence, maxCol + 1)).to.equal(sentence);
    })
    it('Works if string exactly fits in 2 maxCol', () => {
        const sentence = 'there was a';
        const maxCol = 5;
        const expectedSentence = 'there\nwas a'
        expect(wrap(sentence, maxCol)).to.equal(expectedSentence);
    })
    it('Edge Case: If one word is greater than maxCol throws an error', () => {
        expect(() => {wrap('definitelymaybe', 1)}).to.throw('Word cannot be longer than maxCol');
    })
    it('Edge Case: If maxCol less than or equal to 0', () => {
        expect(() => {wrap('definitelymaybe', 0)}).to.throw('maxCol should be greater than 0');
    })
    it('Returns string if less than maxCol', () => {
        const sentence = 'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';
        const expectedSentence = `Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`
        expect(wrap(sentence, 20)).to.equal(expectedSentence);
    })

})
