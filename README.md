The next steps:

use hello.js from Next.js and index.js from Prisma to build an endpoint 
create an endpoint to fetch data from
create a genuine login page that returns {user, suites} from a database


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## API

This project is designed to pull data from a Postgresql database
### Postgresql
Install Postgresql > PGAdmin4 > knex > knex-cleaner > pg > dotenv

set up a dotenv with secrets
knex init and import secrets as constants THIS_SECRET, etc

migrate

add tables to the migration

Create seeds for each table

seed

### Queries with Prisma
Adding prisma
npm install prisma --save-dev
Invoking Prisma
npx prisma  
Setting up Prisma Schema
npx prisma init

update the schema.prisma
I updated the url variable from DATABASE_URL to DEV_DATABASE_URL

Prisma Introspects the database, creating a data model in the Prisma schema
npx prisma db pull
make the client with $ prisma generate

update the schema column names to be lower-case

npm install @prisma/client 
npx prisma generate 

https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/querying-the-database-typescript-postgres

    you can query the database through index.ts by the command
    $ npx ts-node ./prisma/index.ts


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Images
unsplash

write-tests.jpg
Christina @ wocintechchat.com
@wocintechchat

teamwork.jpg
Hannah Busing

team-win.jpg
Natalie Pedigo
@nataliepedigo
