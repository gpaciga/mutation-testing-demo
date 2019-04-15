# Mutation Testing Demo

This repo is meant to help demonstrate the limitations of "test coverage" as a metric and what mutation testing can add.

This code was originally used in a live presentation, but the code is simple enough that it is probably self-explanatory as a static example.

## Instructions

Install dependencies:
```
npm i
```

Run tests:
```
npm run test
```

Run stryker:
```
npm run stryker
```

Coverage report will be here: `coverage/lcov-report/index.html`

Mutant report will be here: `reports/mutation/html/index.html`

