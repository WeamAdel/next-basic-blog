# Next.js 14 Basic Blog

A basic blog using Next.js 14 to create, view, edit and delete posts.

## Demo

Here is a [demo link](https://next-basic-blog-ten.vercel.app/) for this project.

## Scripts

### Run locally

Run in development mode

```bash
npm run dev
```

Run in production mode

```bash
npm run start
```

### Test

```bash
npm run test
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Structure

```text
project/
├── __mocks__/ Mocks for tests
├── app/ All pages are located here
├── constants/ Self descriptive
└── models/ API related types
├── providers/ Self descriptive
├── queries/ React queries for client side data fetching
├── styles/ Shared styles
├── types/ Non API related types
├── utils/ Utility functions
```

## Testing

Unit and snapshot tests using:

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

Tests are located next to the file/component being tested.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
