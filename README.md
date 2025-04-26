# Space News

## Getting Started

### Requirements

```sh
node: >=18.0.0
pnpm: >=10.0.0 
```

This project uses `pnpm` and `nodejs`.

### Install

```sh
pnpm i
```

### Run

```sh
pnpm dev
```

### Test

Testing is done with Vitest and Mock Service Worker (MSW). MSW intercepts XHR requests and returns data. This allows me to do things like write [tests](./src/App.test.tsx) for [App.tsx](./src/App.tsx) without ever worrying about mocking `fetch`. It just works.

```sh
pnpm test
```

### Build

```sh
pnpm build
```

### Lint

Linting is on the lighter side, but here are the core opinions I added:

- `eslint-plugin-unicorn`
- `eslint-plugin-unused-imports`

## Dependencies

### @tanstack/router

I hadn't used this before but heard great things. The search parameters feature set is nice. I also prefer modeled routing over JSX routing.

### @tanstack/react-query

Added for complex request requirements, like infinite loading. `@tanstack/router` seems to do a good job when it comes to handling/caching page requests, so I felt like this was only necessary in very niche use cases for this application.

### @tanstack/react-virtual

This is used to deburden the memory load large lists have on the DOM. Tossed it in to handle nodes loaded via infinite scrolling on the search page.

## Troubleshooting

If this project won't run for you, it may be due to one of those versions mismatching. You can use `asdf` to scope versions to those required by this project.

I've pinned the versions using `asdf`, so they can be installed by following the instructions below.

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
