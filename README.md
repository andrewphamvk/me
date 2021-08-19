# [andrewphamvk.me](https://www.andrewphamvk.me/)

This is the source for my personal website. Coming soon.

# Tech Stack

- [Next.js](#nextjs)
- [Yarn (Berry)](#yarn-berry)

## Next.js

The choice was between Next.js, Gatsby.js and basic React. I'm already familiar with Next.js and wanted to continue learning more about it. It has great SEO capabilities and even SSG, which is perfect for this static project.

Steps:

- `yarn create next-app --typescript`
- `yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest`
- `npx tailwindcss init -p`

## Yarn (Berry)

Yarn has always been faster than npm hands down. With Yarn (Berry) and Plug'n'Play the installs are even faster. Downside is that it doesn't work for some scenarios (React Native) and is still not the standard version of Yarn.

- https://dev.to/arcanis/introducing-yarn-2-4eh1
- https://dev.to/arcanis/yarn-3-0-performances-esbuild-better-patches-e07

Steps:

1. `yarn set version berry`
2. Add `nodeLinker: pnp` in `.yarnrc.yml` file
3. `yarn dlx @yarnpkg/sdks vscode`
4. [Use workspace version](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript) of TypeScript.

# License

Licensed under the MIT License. Feel free to use parts of the code in your own projects with attribution!
