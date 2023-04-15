This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to update Supabase schema using Prisma

To update your Supabase database schema using Prisma, follow these steps:

1.  First, make sure your Prisma schema file (`schema.prisma`) is updated with the new schema you provided.
2.  Next, you need to generate a new migration for the changes in the schema. Run the following command in your terminal:
    `npx prisma migrate dev --create-only`

        You'll be prompted to enter a name for the new migration. Give it a descriptive name, such as `update_youtube_video_and_embedding_models`.

3.  Once the new migration is created, navigate to the `prisma/migrations` directory, and open the `migration.sql` file inside the folder named after the migration you just created.
4.  Add the following line at the beginning of the `migration.sql` file to enable the `vector` extension if it hasn't been enabled yet:

    `CREATE EXTENSION IF NOT EXISTS vector`

5.  Save the `migration.sql` file.
6.  Now, run the new migration to apply the changes to your Supabase database:

    `npx prisma migrate dev`

    After running the migration, your Supabase database schema will be updated with the new `YoutubeVideo` and `Embedding` models.

    Remember to regenerate your Prisma Client to have the updated types and client API:

    `npx prisma generate`

    You can now use the updated Prisma Client in your application to interact with the new schema.

## How do seed your db

1. Create `seed.ts` in the `prisma` folder. See [prisma docs](https://www.prisma.io/docs/guides/migrate/seed-database#how-to-seed-your-database-in-prisma) for seed template example.
2. Add the following to `package.json`

```
"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
},
```

2. In the terminal run `npx prisma db seed` or `pnpm prisma db seed`

## How to reset development db and seed new db

1. Reset the db without seeding yet. We do this because we need to manually modify the sql to set up vector embeddings

```
prisma migrate reset --skip-seed
```

2. Follow steps in the previous section "How to update Supabase schema using Prisma"
3. Run `npx prsima db seed`
