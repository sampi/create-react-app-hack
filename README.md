# create-react-app-hack
Hacking create-react-app to work with Preact &amp; LESS without ejecting

## Why?

* Preact is [better](https://custom-elements-everywhere.com/#preact) at living together with external libraries and Custom Elements than [React](https://custom-elements-everywhere.com/#react)
* Preact is smaller ([React](https://user-images.githubusercontent.com/524272/39094200-406ab32c-462c-11e8-8e4b-2e12e374add0.png) vs [Preact](https://user-images.githubusercontent.com/524272/39094329-14c0b5c6-462e-11e8-8e4d-f5b681e8ed0c.png))
* Preact didn't have shady license issues
* We didn't want to `eject` our codebase

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









> PS: My team working on [Tradeshift UI Components](https://github.com/Tradeshift/tradeshift-ui) is [hiring](https://jobs.lever.co/tradeshift/3b5b36e6-e9f1-42e9-9ccc-0d9787464e4f)!
