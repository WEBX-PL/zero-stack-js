# WEBX ZERO STACK JS

This is official template for any WEBX project 

## Technologies
- [turborepo](https://github.com/vercel/turborepo) as monorepo manager
- [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager
- [Firebase](https://firebase.google.com) as core for backend
- [NextJS](https://nextjs.org) as [React](https://reactjs.org/) framework

### Apps

- `web`: another [Next.js](https://nextjs.org) app
- `admin`: another [Next.js](https://nextjs.org) app
- `functions`: another [Firebase](https://firebase.google.com) functions

### Packages

- `ui`: a stub React component library shared by both `web` and `docs` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `firebase-client`: initialize firebase for project

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn run dev
```

### Environment

- `FIREBASE_CONFIG` - firebase config (json)