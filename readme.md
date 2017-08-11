# React Camper Leaderboard

This is my camper leaderboard for Free Code Camp's [second React challenge](https://www.freecodecamp.com/challenges/build-a-camper-leaderboard). Demo is available on [my site](https://zsolti.co/fcc/leaderboard/).

## User Stories

- [x] I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.
- [x] I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.
- [x] I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

## Tools Used

- [React.js library](https://facebook.github.io/react/)
- [Webpack module bundler](https://webpack.js.org/)
- [Babel.js compiler](https://babeljs.io/)
- [ESLint linter](http://eslint.org/) with [Airbnb's JS config](https://github.com/airbnb/javascript)
- [Sass](http://sass-lang.com/) preprocessor with [PostCSS' Autoprefixer](https://github.com/postcss/autoprefixer)
- [Karma](https://karma-runner.github.io) test runner
- [Mocha](https://mochajs.org/) test framework
- [Expect](https://github.com/mjackson/expect) assertion library

## Install and Build

You need to have `yarn` [installed](https://yarnpkg.com/lang/en/docs/install/) on your computer, or you can use `npm`.

#### Clone this repo

``` bash
git clone https://github.com/zsoltime/react-markdown-previewer.git
cd react-markdown-previewer
```

#### Install dependencies

``` bash
yarn
# OR
npm install
```

#### Start dev server with hot reload

It builds HTML, CSS, and the JavaScript bundle, starts a dev server and refreshes the browser on every saved changes.

``` bash
yarn start
# OR
npm start
```

#### Build production bundle

It builds production bundle, uglifies JS, minifies CSS - ready to upload.

``` bash
yarn build
# OR
npm run build
```

#### Run unit tests

Run unit tests with Karma and Mocha

``` bash
yarn test
# OR
npm run test
```
