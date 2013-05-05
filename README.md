# Usage

```
middleMan.set("jquery");
```

- `middleMan.set("jquery", function(url) {});`
- hits `pulldown-api.herokuapp.com/set/jquery`
- invokes callback, passing server response

Server response is _always_ an array of URLs, even if there's just one URL.

# Example

```js
var middleMan = require("./index.js");
var nock = require("nock");
middleMan.set("jquery", function(d) { console.log(d); });
```

