# Space News

## Getting Started

### Tools
This project uses `pnpm` and `nodejs`. You can install each in many ways, but I've pinned the versions using `asdf`, so they can be installed with the following...

If you don't have `asdf` installed:

```sh
brew install asdf
```

Then add plugins for each tool:
```sh
asdf plugin add nodejs
asdf plugin add pnpm
```

Then, in project root, run the following to install pinned versions:
```sh
asdf install
```

This may not be necessary, but just in case you run into issues running the project due to version mismatches, that should resolve them.


### Install

```sh
pnpm i
```

### Run

```sh
pnpm dev
```

### Test

Testing is done with Vitest and Mock Service Worker (MSW). MSW intercepts XHR requests so the unit test layer doesn't have to worry about it.

```sh
pnpm test
```

### Build

```sh
pnpm build
```