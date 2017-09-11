import add from '../../add.js';

describe('calc.jsのテスト', () => {
  it('足し算の結果が正しい', () => {
    expect(add.add(1, 2)).to.be.eql(3);
  })
})
