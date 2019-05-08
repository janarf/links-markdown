const expect = require('chai').expect;
const extractLinksFromMd = require('../index');

describe('extractLinksFromMd()', () => {
  it('Return object with links and names from LMS example', () => {
    const str = `# Lorem ipsum
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    [foo](http://foo.com)
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    expect(extractLinksFromMd(str)).to.deep.equal([
      { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
      { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
      { href: 'http://foo.com', text: 'foo' },
    ]);
  });

  it('Return empty array from empty string', () => {
    expect(extractLinksFromMd('aaa')).to.deep.equal([]);
  });
  const str2 = `
  Esta biblioteca se destina à conversão de algarismos romanos para arábicos e de arábicos para romanos, para uso em aplicações web.


Na versão atual é capaz de converter números em algarismos romanos de 1 a 4999 e também realiza a operação inversa.


#### versão 1.0.2 (released)
- funcionalidades:
    1. conversão de algarismos romanos em arábicos de 1 até 3999.
    2. conversão de algarismos arábicos em romanos de 1 até 3999.
    `
  it('Return empty array from string without links', () => {
    expect(extractLinksFromMd(str2)).to.deep.equal([]);
  });
});