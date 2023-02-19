
# All in one Nextjs Portfolio
![developer-portfolio](https://user-images.githubusercontent.com/50758242/219967141-a086c916-b891-4f4f-adb7-974d658584ed.png)

A custom-built portfolio created with Next.js to showcase your skills and work with very smooth animations and user friendly interface and experience, and to connect with a wider range of potential clients.

## Features
-   Typescript
-   Strongly typed.
-   Husky, Eslint, Prettier Configured.
-   Smooth animation using framer-motion
-   Well-optimized and performant (with a score between 95 - 100)
-   Sendgrid Support to receive emails from the contact form
-   Built-in API routes (you do not need a custom backend)
-   Support for google analytics
-   Google reCaptcha integration
-   Formik integration.
-   Responsive design
-   Built-in color generator (but you can still add your own).
-   Auto fetch GitHub projects (sorted by last 8 with highest stars)
-   Very customizable.
-   PNPM as a default package manager for fast and efficient disk space usage.
-   Code well organized, Customizable, and scalable.

## Built using: 

 - Next.Js
 - Formik
 - Framer-motion
 - Figma
 - TypeScript
 - Vscode with the help of these amazing extensions [extensions.json](https://github.com/ZakariaBenali/nextjs-portfolio/blob/main/.vscode/extensions.json)
 - Additional packages you can find on [package.json](https://github.com/ZakariaBenali/nextjs-portfolio/blob/main/package.json)


## :gear:  Prerequisites

1.  Recaptcha Sitekey and SecretKey, grab yours [here](https://www.google.com/recaptcha/admin)
2.  GitHub personal access token (classic) This one is optional only if you want auto-fetch repositories, you can create one [here](https://github.com/settings/tokens) with read:user and repo permissions, Make sure it's a Classic personal token and not a Fine-grained personal access token.
> The code to get GitHub repositories and their relevant components won’t be added if you don’t specify the GitHub token in the environment.

3.  Google Analytics ID (Same for GitHub access token, it is optional if you want to include Google Analytics)
4.  A Sendgrid API key is necessary to receive the emails from the contact form.

## :floppy_disk: Data
All data on the project is located under the folder data/ located [here](https://github.com/ZakariaBenali/nextjs-portfolio/tree/main/src/data) 

## :hammer_and_wrench: Installation locally

> Before proceeding, make sure you have Nodejs and NPM installed.

 1. Install PNPM package: 
  ```sh
    npm install -g pnpm
   ```
 2. Install dependencies:
   ```sh
    pnpm install
   ```
 3. Copy the .env.example to a new file called .env.development.local
> This file is only used locally, please use the variable inside it as a reference when deploying

 4. Fill the necessary environment variables on .env.developement.local file
 5. Run the project
 ```sh
    pnpm dev
   ```



## :rocket: Deployment

> Make sure to set the necessary environment variables in your production environment. 

### To Vercel

 1. Install Vercel CLI:
```sh
pnpm i -g vercel
```
 2. Deploy to Vercel 
 ```sh
	vercel
 ```
> #Add --prod if you want to deploy to production

Alternatively, You can create a GitHub repo from this template, and make the necessary modifications locally and push it to the repo, then link Vercel with your newly created repository.


### Outside Vercel

 - Build the project:
```sh
pnpm build
```
 - Start the server on production:
 ```sh
pnpm start
```

 ## :fire: Upcoming
 
-   Astro build version
-   Support for the app folder and the current beta features of next.js 13 (once it's stable)
-   Add support for the telegram bot (receiving contact emails in telegram)
-   Support for sentry for performance and error tracking and monitoring

 ## License
 This project is licensed under the MIT License - see the  [LICENSE.md](https://github.com/ZakariaBenali/nextjs-portfolio/blob/main/LICENSE)  file for more details
