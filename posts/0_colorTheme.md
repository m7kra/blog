When designing websites, I like to adapt the color theme to the system theme. On the other hand, the user should be able to override the system's choice. I wound up writing a custom React hook to handle this.

This hook is available as [an npm package](https://www.npmjs.com/package/@m7kra/color-theme):

```bash
npm install @m7kra/color-theme
```

The basic usage is as follows:

```jsx
import { useColorTheme } from '@m7kra/color-theme';

function App() {
    const [theme, setTheme] = useColorTheme('dark');

    return (
        <div className={theme}>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
            <button onClick={() => setTheme('system')}>System</button>
        </div>
    );
};
```

But here's the catch: if you use this hook in multiple components and change the theme in one of them, the other components won't be updated. This is because the state is not shared between components. To solve the problem, this package uses React's Context API. You can wrap your app in a `ColorThemeProvider` component and use a different hook, `useContextColorTheme`, to access the theme:

```js
import { ColorThemeProvider, useContextColorTheme } from '@m7kra/color-theme';

function App() {
    return (
        <ColorThemeProvider>
            <ChildComponent1 />
            <ChildComponent2 />
        </ColorThemeProvider>
    );
};

function ChildComponent1() {
    const [theme, setTheme] = useContextColorTheme();

    return (
        <div className={theme}>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
            <button onClick={() => setTheme('system')}>System</button>
        </div>
    );
};

function ChildComponent2() {
    const [theme] = useContextColorTheme();

    return (
        <div className={theme}>
            <p>Current theme: {theme}</p>
        </div>
    );
};
```

The package's source code is available on [GitHub](https://github.com/m7kra/color-theme/). To test it out, you can use this very website: you'll find a button on the top right corner that lets you change the theme.

Oh, by the way, Merry Christmas!

M7kra
