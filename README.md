# router.js

An easy to use Javascript library for "one-page routing".

## Installation

Just include router.js:

```html
<script src="path/to/router.js" type="text/javascript"></script>
```

**Note**: include `router.min.js` for the minified router.js library

## Usage

To define your routes you need to invoke either the `Router.add()` or even shorter `route()` function. The required arguments are pretty simple.

For every route you need to pass two arguments:

1. the `hash` of the route
2. the `callback function` that gets invoked after a route match

```javascript
route(
  '< hash 1 >', function() {
    // do something
  },
  '< hash 2 >', function() {
    // do something
  }
);
```

Optionally, you can match params using either of the following formats:

1. `:name` to match a segment within the hash delimited with slashes
2. `*name` to match a segment NOT necessarily delimited with slashes

Params will be available as arguments within the callback function.

```javascript
route(
  'get/:id', function(id) {
    // do something
  }
);
```

## Demo

You can see `router.js` on the demo page <a href="https://archan937.github.io/router.js#demo">https://archan937.github.io/router.js#demo</a>.

## Contact me

For support, remarks and requests, please mail me at [pm_engel@icloud.com](mailto:pm_engel@icloud.com).

## License

Copyright (c) 2019 Paul Engel, released under the MIT license

[http://github.com/archan937](http://github.com/archan937) - [http://twitter.com/archan937](http://twitter.com/archan937) - [pm_engel@icloud.com](mailto:pm_engel@icloud.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
