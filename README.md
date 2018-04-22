# create-react-app-hack
Hacking create-react-app to work with Preact &amp; LESS without ejecting

## How it's done
I broke the hack down to 5 steps:

### Step 0 - Initialize using `create-react-app`

https://github.com/sampi/create-react-app-hack/pull/1

We bootstrap our repo with `create-react-app`

### Step 1 — Switch from `react` to `preact`

https://github.com/sampi/create-react-app-hack/pull/2

This is the hack itself, we trick `create-react-app` into using `preact` by aliasing all the related modules.

### Step 2 — Set `babel`’s IE target from 9 to 11

https://github.com/sampi/create-react-app-hack/pull/3

We don't need to support IE9 or IE10, let's not build for them either!

### Step 3 — Add `LESS` compilation

https://github.com/sampi/create-react-app-hack/pull/4

Time to pre-process `LESS` into `CSS`.

### Step 4 — Add `webpack-subresource-integrity`

https://github.com/sampi/create-react-app-hack/pull/5

This is how you can add extra `webpack` plugins.