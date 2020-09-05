# [react-randoml](https://github.com/randoml-js/react-randoml)

[![NPM version](http://img.shields.io/npm/v/react-randoml?style=flat-square)](https://www.npmjs.com/package/react-randoml)
[![NPM downloads](http://img.shields.io/npm/dm/react-randoml?style=flat-square)](https://www.npmjs.com/package/react-randoml)
[![NPM license](https://img.shields.io/npm/l/react-randoml?style=flat-square)](https://www.npmjs.com/package/react-randoml)
[![Codecov](https://img.shields.io/codecov/c/github/randoml-js/react-randoml?style=flat-square)](https://codecov.io/gh/randoml-js/react-randoml)
[![Travis](https://img.shields.io/travis/randoml-js/react-randoml/master?style=flat-square)](https://travis-ci.org/randoml-js/react-randoml)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-randoml?style=flat-square)](https://bundlephobia.com/result?p=react-randoml)

## About

#### [RandoML](https://www.npmjs.com/package/randoml) implementation for React

## How to Install

First, install the library in your project by npm:

```sh
$ npm install react-randoml
```

Or Yarn:

```sh
$ yarn add react-randoml
```

## Getting Started

#### Options

[RandoML options](https://github.com/randoml-js/randoml#options)

#### Returned Values

[RandoML methods](https://github.com/randoml-js/randoml#methods)

#### Example

**`useRandoml` hook:**

```js
import React from 'react';
import { useRandoml } from 'react-randoml';

const App = () => {
  const { choose } = useRandoml(/* object with options (if needed) */);

  const randomValue = choose();

  return <h1>{randomValue}</h1>;
};

export default App;
```

**`withRandoml` HOC:**

```js
import React from 'react';
import { withRandoml } from 'react-randoml';

const App = ({ choose }) => {
  const randomValue = choose();

  return <h1>{randomValue}</h1>;
};

export default withRandoml(/* object with options (if needed) */)(App);
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
