# Identificador de links em Markdown v.1.0.0

**Esta biblioteca se destina à identificação e extração de links em markdown para um objeto.**


Na versão atual é capaz de identificar e extrar nomes e links de uma string em formato markdown.

## Como instalar:

```shell

$  npm install extractLinksFromMd-janarf

```

## Como utilizar:

```node

> const extractLinksFromMd = require("extractlinksfrommd-janarf");
>const str = `# Lorem ipsum
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  
    incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) 
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
    [foo](http://foo.com)
    Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`;

> extractLinksFromMd(str)
> // returns [
      { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
      { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
      { href: 'http://foo.com', text: 'foo' },
    ]

```


#### versão 1.0.1 (released)
- funcionalidades:
    identifica e extrai links de uma string markdown e os retorna em um objeto com link e nome.
