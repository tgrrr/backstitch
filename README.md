# Backstitch

> Back stitch is a popular stitch used for seams to give them strength & durability.

## tl;dr

A simple wrapper pattern for react frameworks, including [Material UI]

It's nothing new to developers, but here's a project to quickly bootstrap your project with **component wrappers** (sometimes called the *adapter pattern*).

### What we get with it

- Easily replace one library with another (eg replace `Material-ui` with `Bootstrap`), and keep the same Component API throughout your app
- Quicker app setup inside whichever starter you want (CRA, Next, etc)
- Quickly generate new UI component wrappers with Hygen
- Quickly generate all of our UI components with a single shell command
- Consistently style throughout our app.
- DRYer code

Eg. Switch every `Button` in our app from contained to outlined with a single line of code:

```jsx
<Button 
+   variant='outlined'
-   variant='contained'
/>
```

### What it's not

- Backstitch is *not* a npm library - it's boilerplate code to clone the code into your project, and code from there

### Features

- ✔ Easily plug and play with [Material UI] (currently v4.10.1) 
    ☐ (Bootstrap and more to come! Contributions welcome) 
- ✔ [StoryBook]
- ✔ Built-in unit testing - WIP
    ☐ [Cypress]
    ☐ [React Testing Library] 
- ✔ [Styled components] (which can be easily switched) 
    ☐ Easily switched for css-modules
    ☐ Switched for emotion
- ✔ TypeScript

<!-- markdownlint-disable no-trailing-punctuation -->
## But why?
<!-- markdownlint-disable no-trailing-punctuation -->

### Imports Before Backstitch

```ts
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
```

### Imports After Backstitch

```ts
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, MenuIcon } from 'common/ui';
```

Refactor reused components themselves using your own pattern and defaults

### Before refactor

*example from [Material-ui buttons] minus style*

```ts
export default function IconLabelButtons() {
    ...
    <Button
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
    >
        Talk
    </Button>
};
```

### After refactor

```ts
export default function IconLabelButtons() {
    ...
    <Button
        disabled
        startIcon={<KeyboardVoiceIcon />}
    >
        Talk
    </Button>
}
```

## Getting Started

Here's how you can quickly boostrap with [Create React App (CRA)]

```zsh
npx create-react-app MyApp  --template typescript
cd MyApp
```

### 1. Clone Backstitch

Clone `backstitch` into the `./src/common` folder of your app:

<!-- TODO: customise for material/bootstrap/etc -->
```zsh
git clone git@github.com:tgrrr/backstitch.git src/common/
```

### Using [Git Submodules] (optional)

```zsh
mkdir -p src/common/
cd src/common/
git submodule add https://github.com/tgrrr/backstitch
git submodule update --init --recursive
cd ../..
```

**Important:** Running `git fetch` inside of the submodule folder (rather than your root) will **over-ride your local changes inside the `common/ui` folder**.

If you want to disable this, and miss out on any updates, just run:

```zsh
// warning: dangerous command ahead:
rm -rf /src/common/.gitignore
```

`rm -rf` is a dangerous command itself, my uncle's friend's daughter lost their entire PHD using it, so be careful!

If you're wary, you might want to check out [git subtree](https://www.atlassian.com/git/tutorials/git-subtree) instead.

### 2. TypeScript setup for React

Add typescript to your project:

```zsh
yarn add -D typescript @types/node @types/react @types/react-dom @types/jest
```

Add material-ui to your `tsconfig.json` file

```git
{
    "compilerOptions": {
+       "types": ["material-ui"]
    }
}
```

### 3. Add the dependencies

```zsh
yarn add -D @storybook/react babel-loader
```

### 4. Setup Storybook

## [StoryBook]

[Install [StoryBook] to your project

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

### 5. Write your first component

```js
import React from 'react';
import { Button } from 'common/ui';

const Foo = () => <Button>Foo who?</Button>;

export default const Foo;
```

**OR** Add your component to your `App.js` file:

```js
import React from 'react';
import { Button } from 'common/ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <Button>Foo who?</Button>
    </div>
  );
}

export default App;
```

### 6. Delete the unused components

Depending on how you've setup Webpack, we want to keep your bundle size small. There's quite a few components, and you wont need all of them. So delete the ones you don't need. You can always cherrypick them later.

To learn more, see: [Minimising bundle size with tree shaking]


### 7. That's it!

At the moment, the components are just set up to let Material-ui deal with the props

Eg.

```ts
import * as React from 'react';
import InputStyled from './InputStyled';
import MaterialInput, {
    InputProps as MaterialInputProps,
} from '@material-ui/core/Input';

interface Props
    extends MaterialInputProps
        // Uncomment these lines to disable the InputProps props:
        // , Omit<
        // MaterialInputProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    className?: string;
}

const Input: React.FC<Props> = ({ className, ...rest }) => (
    <InputStyled>
        <div className={['Input', className && className].join(' ')} data-testid='Input'>
            <MaterialInput {...rest} />
        </div>
    </InputStyled>
);

export default Input;
```

This isn't my favourite pattern, it's better to be more explicit by declaring exactly which props we want to include (or exclude using `Omit`).

As you customise each component, it's a good idea to remove any props being passed with `{...rest}`, and limit it to the props that we know that we'll need.

___

## Generating custom components on the fly

We're using [Hygen] to template quickly

### Usage

Replace `NAME` with the component you want to create

**Note: ensure you get your `CamelCase` right!**

#### Generate UI components with Yarn

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

### Eg. Generate a new Material-UI button component

If you want a slightly different template than I've used, you're in luck.

1. Customise the `src/common/_templates/ui/new/component.js.t` file the way you want it.

2. Generate a new button

```zsh
$ yarn hygen ui new --name Button

> yarn run v1.22.4
> $ HYGEN_TMPLS=src/common/_templates hygen ui new --name Button
>
> Loaded templates: src/common/_templates
>        added: src/common/ui/Button/Button.tsx
>        added: src/common/ui/Button/index.ts
>       inject: src/common/ui/index.ts
>       inject: src/common/ui/index.ts
>        added: src/common/ui/Button/ButtonStyled.tsx
>        added: src/common/ui/Button/Button.stories.tsx
>        added: src/common/ui/Button/Button.test.js
> new:
> - hygen ui new --name NAME
```

3. That's it!

### Generating multiple components quickly

It's possible to batch generate all of the `@material-ui/core` components using the `./hygen-bash.sh` script

1. Customise the `src/common/_templates/ui/new/component.js.t` file the way you want it (the same as we do in[Generate UI components with Yarn](#generate-ui-components-with-yarn))

Edit the `./hygen-bash.sh` script to only include the material-ui components you want to include

```zsh
$ nano hygen-bash.sh

declare -a arr=(
    "Button"
    ...
    "Card"
)
```

Then from your **home** directory run the `hygen-bash.sh` script:

```zsh
$ ./src/common/hygen-bash.sh

$ HYGEN_TMPLS=src/common/_templates hygen ui new --name Button

Loaded templates: src/common/_templates
       added: src/common/ui/Button/Button.tsx
       added: src/common/ui/Button/index.ts
      inject: src/common/ui/index.ts
      inject: src/common/ui/index.ts
       added: src/common/ui/Button/ButtonStyled.tsx
       added: src/common/ui/Button/Button.stories.tsx
       added: src/common/ui/Button/Button.test.js
new:
- hygen ui new --name NAME

✨  Done in 0.58s.
Card
yarn run v1.22.4
$ HYGEN_TMPLS=src/common/_templates hygen ui new --name Card

Loaded templates: src/common/_templates
       added: src/common/ui/Card/Card.tsx
       added: src/common/ui/Card/index.ts
      inject: src/common/ui/index.ts
      inject: src/common/ui/index.ts
       added: src/common/ui/Card/CardStyled.tsx
       added: src/common/ui/Card/Card.stories.tsx
       added: src/common/ui/Card/Card.test.js
new:
- hygen ui new --name NAME

✨  Done in 1.38s.
```

## Kudos

- [Hygen CRA](https://github.com/jondot/hygen-CRA)
- [Hygen](https://www.hygen.io/quick-start)

## How to contribute

Here's the current [todo list](./src/common/backstitch.todo)

### Use [Semantic commit messages]

**Eg.**

- `chore`: add Oyster build script
- `docs`: explain hat wobble
- `feat`: add beta sequence
- `fix`: remove broken confirmation message
- `refactor`: share logic between 4d3d3d3 and flarhgunnstow
- `style`: convert tabs to spaces
- `test`: ensure Tayne retains clothing

[Create React App (CRA)]: https://reactjs.org/docs/create-a-new-react-app.html
[Cypress]: https://www.cypress.io/
[Git Submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[Hygen]: https://www.hygen.io/quick-start
[Material UI]: https://material-ui.com/
[Material-ui buttons]: https://material-ui.com/components/buttons/
[Minimising bundle size with tree shaking]: https://material-ui.com/guides/minimizing-bundle-size/
[React Testing Library]: https://github.com/testing-library/react-testing-library
[Semantic commit messages]: https://seesparkbox.com/foundry/semantic_commit_messages
[StoryBook]: https://storybook.js.org/docs/guides/guide-react/
[Styled components]: https://styled-components.com/
[Hygen CRA]: https://github.com/jondot/hygen-CRA
[Hygen]: https://www.hygen.io/quick-start
