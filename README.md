# Presence

A customizable web app to use as a company or personal website. Instructions on how to get your personal information and customizations in further below.

## Dependencies

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using the following libraries and concepts:

* Tailwind CSS
* Typescript
* shadcn-ui
* CVA (design system)

## Local development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

* `app/data/config.ts` for hardcoded strings like the website title or description
* Replace `app/favicon.ico` with your own fav icon that displays in the browser bar
* Add your custom images to the `public` directory. You can create subfolders for your needs, e.g. `public/blog` for blog article images, just make sure to reference them within that path.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
