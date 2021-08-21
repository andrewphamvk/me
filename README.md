# [andrewphamvk.me](https://www.andrewphamvk.me/)

This is the source for my personal website. Coming soon.

# Tech Stack

- [Next.js](#nextjs)
- [Yarn (Berry)](#yarn-berry)
- [Tailwindcss](#tailwindcss)
- [heroicons](#heroicons)

## Next.js

The choice was between Next.js, Gatsby.js and basic React. I'm already familiar with Next.js and wanted to continue learning more about it. It has great SEO capabilities and even SSG, which is perfect for this static project.

Steps:

1. Initialize the project `yarn create next-app --typescript me`

## Yarn (Berry)

Yarn has always been faster than npm hands down. With Yarn (Berry) and Plug'n'Play the installs are even faster. Downside is that it doesn't work for some scenarios (React Native) and is still not the standard version of Yarn.

- https://dev.to/arcanis/introducing-yarn-2-4eh1
- https://dev.to/arcanis/yarn-3-0-performances-esbuild-better-patches-e07

Steps:

1. `yarn set version berry`
2. Add `nodeLinker: pnp` in `.yarnrc.yml` file
3. `yarn dlx @yarnpkg/sdks vscode`
4. [Use workspace version](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript) of TypeScript.

## Tailwindcss

Because I don't have much experience with CSS, it's been hard for me to structure my CSS classes in a way that doesn't end up creating ugly duplicated classes or a spider web of accidental reuse. At which point I would not be able remove CSS code confidently without knowing which components I had been affected.

Tailwindcss eliminates that and provides atomic css that has great responsive support. Version 2.2 recently launched and one of the exciting features is [Just-in-Time mode](https://tailwindcss.com/docs/just-in-time-mode) that enables arbitrary css classes.

Usually for projects that I don't plan to spend too much on the design I would use Chakra UI. In this case I want to be able to finely customize the design for better or for worse. 🙂

Steps:

1. `yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest`
2. `npx tailwindcss init -p`

## Font Awesome

Comprehensive set of icons for anything you could possibly want. I was debating whether or not to use the React component or basic CSS. To be honest, the React components don't feel any easier to use. I just wanted to try it out.

The good thing is that only the fonts used will be part of the bundle.

Steps:

1. yarn add @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons

# License

Licensed under the MIT License. Feel free to use parts of the code in your own projects with attribution!
