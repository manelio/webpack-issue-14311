# Test Webpack 4

```
cd webpack4
npm i
npx webpack serve -c ../webpack.config.js
```

Open browser at specified port. Everything is ok.

# Test Webpack 5

```
cd webpack5
npm i
npx webpack serve -c ../webpack.config.js
```

Open browser at specified port. Console shows:

```
main.js:2 Uncaught ReferenceError: x is not defined
    at main.js:2
    at Object.execCb (require.js:1696)
    at Module.check (require.js:883)
    at Module.enable (require.js:1176)
    at Module.init (require.js:788)
    at callGetModule (require.js:1203)
    at Object.completeLoad (require.js:1590)
    at HTMLScriptElement.onScriptLoad (require.js:1717)
```
