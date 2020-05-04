# Alistair Shepherd website

[![GitHub](https://img.shields.io/badge/GitHub-Accudio-0366d6.svg)](https://github.com/Accudio) [![Twitter](https://img.shields.io/badge/Twitter-@accudio-1DA1F2.svg)](https://twitter.com/accudio) [![Website](https://img.shields.io/badge/Website-alistairshepherd.uk-4B86AF.svg)](https://alistairshepherd.uk) [![Donate](https://img.shields.io/badge/Donate-Paypal-009cde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=alistair.shepherd@hotmail.co.uk&item_name=Supporting+open+source+projects+by+Alistair+Shepherd&currency_code=GBP)

Website for Alistair Shepherd at [alistairshepherd.co.uk][alistairshepherdurl]. Built by [Accudio][accudiourl].

## Version History

- v1.1.1  - Tweaked Nuxt HTML minifier so `</body>` and `</html>` are not removed
- v1.1.0  - Added Countly analytics support, consent dialog and made a couple tweaks
- v1.0.0  - Release version for public publishing
- v0.3.0  - Rebuild from scratch to address fundamental problems in architecture
- v0.2.0  - Initial stable presentable version

## Build setup
Built with Nuxt.js, for more info: [Nuxt.js docs][nuxtdocs].
```
# install dependencies
$ npm install

# development server — hot reload, no service worker — at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

[alistairshepherdurl]:https://alistairshepherd.uk/
[accudiourl]:https://accudio.com/
[nuxtdocs]:https://github.com/nuxt/nuxt.js
