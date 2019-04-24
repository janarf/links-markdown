function extractLinksFromMd(str) {
  const regLinks = /\[(.*?)\]\(.*?\)/g;
  const regName = /\[(.*?)\]/g;
  const regHref = /\(.*?\)/g;
  return str.match(regLinks).map(element => {
    return {
      href: element.match(regHref)[0].slice(1, -1),
      text: element.match(regName)[0].slice(1, -1)
    };
  });
}

module.exports.extractLinksFromMd = extractLinksFromMd;