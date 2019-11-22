# Test to show a bug in gridsome using v-if
> @see this thread : https://github.com/gridsome/gridsome/issues/249

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install dependencies and build

```
yarn
gridsome build
```

### 3. serve the dist folder

using [npm serve](https://www.npmjs.com/package/serve)

```
yarn global add serve
serve dist
```

or whatever you want (mamp etc) - sure you're a big boy ;)