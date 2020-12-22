# KoalaDigital Mini Wesbite - A simple 2-Page Website Template without CMS

This is self-contained 2-page Website for Portfolio, Resume, CV, Profile, Project Showcase. After the site is exported into a static folder, you can host it for **FREE** on GitHub, Netlify, or SurgeSH.

This template uses:

- NextJS
- ReactJS
- TailwindCSS
- **No CMS** to store content. Only local Markdown files.

## How to use this template?

Assumed you have cloned this project, do the steps below to make it yours:

Run `yarn dev` before developing.

### Step 1 - Update content

- Update the `.md` files in `content/projects` with attributes and content
- Change the `.md` file names. The file name will become the URL e.g. `project-1.md` => `/project/project-1`

More:

- Use Free Doodles from Open Doodles https://www.opendoodles.com/
- Use Unplash API for random photos: https://source.unsplash.com/1500x1000/?nature,water

### Step 2 - Update the styles

- Generate your Favicons from Favicon.io https://favicon.io/ and put them in `public/images/favicon_io` directory
- Update the `public/images/logo.png` to your own logo

- (Optionally) Use Free SVG icons from Linear Icons https://linearicons.com/free
- (Optionally) Update `index.js`, the Homepage and `[slug].js`, the Project page, to your liking
- (Optionally) Use `TailwindCSS` utility CSS classes to style these 2 pages to your liking
- (Optionally) To extend `TailwindCSS`, update the `tailwind.config.js`. Then run `yarn css` to create the new `/public/css/tailwind.css` file.
- (Optionally) To add Custom CSS on top of `tailwind.css` file, update `/public/css/custom.css`

More:

- Add more Free SVG icons from https://linearicons.com/free

### Step 3 - (Optional) Add more Content Type

To add new Content Type such as `/blog/post-1`, do the following:

- Copy `/content/projects` => `/content/blog`
- Copy `/pages/projects/[slug].js` => `/pages/blog/[slug].js`
- In the `/pages/blog/[slug].js`, update the source of `.md` files in `getInitialProps()` function. This is the Data Source
  during development and if you use NextJS as a server.
- In the `/pages/index.js` file, copy the function `importProjectsMd()` => `importBlogsMd()` and update the `.md` file source accordingly. This is where Blog data is pulled into the Homepage.
- In the `next.config.js`, add more exported paths into the `exportPathMap()` function. This is where exported paths of static pages are defined.

More:

- Use Frontmatter in the `.md` files to add more attributes

### Step 4 - Export and deploy

To GitHub:

- Run `yarn out-github` to produce the `docs` directory, the root directory of the static website. The paths of the pages in here match what is defined in `exportPathMap()`.
- Commit the `out` directory to GitHub.
- In GitHub Pages settings, point to the `/docs` directory.

To Netlify or SurgeSH:

- Run `yarn out` to produce the `out` directory.
- Only deploy the `out` directory.

## Images and Icons

- Generate your Favicons from Favicon.io https://favicon.io/ and put them in `public/images/favicon_io` directory
- Use Free Doodles from Open Doodles https://www.opendoodles.com/
- Use Unplash API for random photos: https://source.unsplash.com/1500x1000/?nature,water
- Add more Free SVG icons from https://linearicons.com/free

## Common CLI

- `yarn` Install the `node_modules`
- `yarn dev` Develop the pages on `http://localhost:3000`

To produce Static Website exports:

- `yarn out` Output into Static files in the `out` folder.
- Deploy the content of the `out` folder as the static website.

To run a website on NextJS server:

- (Optionally) `yarn build` Built the optimised Production build if you use NextJS as a server
- (Optionally) `yarn start` Run the NextJS server and serve the Production build

## Notes

- Node version > 10 might be needed
