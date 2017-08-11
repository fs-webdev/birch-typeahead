[![Build Status](https://travis-ci.org/FamilySearchElements/birch-typeahead.svg?branch=master)](https://travis-ci.org/FamilySearchElements/birch-typeahead)

# birch-typeahead

An element providing a starting point for your own reusable Polymer elements.


## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Running the component

1. (Once) Install or update the [Polymer CLI](https://www.npmjs.com/package/polymer-cli): ```npm i -g polymer-cli```
1. (Once) Install the [frontier-cli](https://github.com/fs-webdev/frontier-cli): ```npm i -g https://github.com/fs-webdev/frontier-cli```
1. Run `bower i` to load all of the dependencies.
1. Run `polymer analyze > analysis.json` to set up docs/demo pages.

This component's demo page is viewable by running:

```bash
frontier element serve -d
```

This component's auto-generated documentation is viewable by running:

```bash
frontier element serve
```

## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/birch-typeahead/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.


## Yeoman support

If you'd like to use Yeoman to scaffold your element that's possible. The official [`generator-polymer`](https://github.com/yeoman/generator-polymer) generator has a [`seed`](https://github.com/yeoman/generator-polymer#seed) subgenerator.
