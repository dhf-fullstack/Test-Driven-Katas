const { expect }= require('chai')
const twoSum = require('./twoSum')

describe('twoSum', () => {
  it('Given an empty array it returns an empty array', () => {
    let array = [];
    expect(twoSum(array)).to.be.an('array').that.is.empty;
  })
})