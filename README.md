# Backstitch

## tl;dr

A simple wrapper pattern for react frameworks, including [Material UI]

## Features

☐ Easily plug and play with [Material UI]
☐ (Bootstrap and more to come! Contributions welcome)
☐ Quick Templating with Hygen
☐ TypeScript
✔ StoryBook

## Getting Starteed

Clone into the `./src` folder of your app:

```zsh
git clone git@github.com:tgrrr/backstitch.git src/common
```

TODO: [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
TODO: [git subtree](https://www.atlassian.com/git/tutorials/git-subtree)

## TypeScript setup for React

Add typescript to your project:

```ts
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

## How to contribute

### 4. Setup Storybook

## [Storybook](https://storybook.js.org/docs/guides/guide-react/)

[Install Storybook](https://storybook.js.org/docs/guides/guide-react/) to your project

add the following scripts to your `package.json`:

```zsh
    "storybook": "start-storybook",
    "storybook:build": "build-storybook -c .storybook -o .out",
```

then:

```zsh
yarn run storybook
```

View your stories at [http://localhost:9009](http://localhost:9009)


We're using [Hygen](https://www.hygen.io/quick-start) to template quickly

### Usage

Replace NAME with the component you want to create

#### For generating UI components with Yarn

From the `home` directory (containing your `package.json`)

```zsh
$ yarn hygen:ui ui new --name NAME [--stateful] [--functional]

> yarn run v1.22.0
> $ HYGEN_TMPLS=src/common-ui/_templates hygen component new --name NAME > --functional
>
> Loaded templates: src/common-ui/_templates
>        added: src/common/ui/NAME/NAME.story.js
>        added: src/common/ui/NAME/NAME.test.js
>        added: src/common/ui/NAME/index.js
> ✨  Done in 0.38s.
```

$ yarn hygen ui new --name NAME [--stateful] [--functional]

Note: there's an example in [common/.config/.package.json](./common/.config/.package.json)

## Kudos

[Hygen CRA](https://github.com/jondot/hygen-CRA)

[Material UI]: https://material-ui.com/
[Semantic commit messages]: https://seesparkbox.com/foundry/semantic_commit_messages
