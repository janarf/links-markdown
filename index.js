function extractLinksFromMd(str) {
  if (str.match(/\[(.*?)\]\(.*?\)/g)) {
    return str.match(/\[(.*?)\]\(.*?\)/g).map(element => {
      return {
        href: element.match(/\(.*?\)/g)[0].slice(1, -1),
        text: element.match(/\[(.*?)\]/g)[0].slice(1, -1)
      };
    });
  } else {
    return [];
  }
}
module.exports = extractLinksFromMd;