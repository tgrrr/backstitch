# Backstitch

## tl;dr

A simple wrapper pattern for react frameworks, including [Material UI]

## Features

☐ Easily plug and play with [Material UI]
☐ (Bootstrap and more to come! Contributions welcome)
☐ Quick Templating with Hygen
☐ TypeScript

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

Here's the current [todo list](./src/common/backstitch.todo)

### Use [Semantic commit messages]

**Eg.**

`chore`: add Oyster build script
`docs`: explain hat wobble
`feat`: add beta sequence
`fix`: remove broken confirmation message
`refactor`: share logic between 4d3d3d3 and flarhgunnstow
`style`: convert tabs to spaces
`test`: ensure Tayne retains clothing

## Templating setup

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
