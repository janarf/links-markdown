function extractLinksFromMd(str) {
  const regLinks = /\[(.*?)\]\(.*?\)/g;
  const regName = /\[(.*?)\]/g;
  const regHref = /\(.*?\)/g;
  return str.match(regLinks).map(element => {
    return { href: element.match(regHref)[0].slice(1, -1), text: element.match(regName)[0].slice(1, -1) };
  });
}
const resp = [
  { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
  { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
  { href: 'http://foo.com', text: 'foo' }
]
const str = `# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[foo](http://foo.com)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
console.log(extractLinksFromMd(str))
console.log(extractLinksFromMd(str) === resp)
module.exports.extractLinksFromMd = extractLinksFromMd;