# KoalaDigital Developer 1-Page Website Template

This is a simple 1-page website template to introduce about yourself and your projects. It is built with NextJS, ReactJS
and TailwindCSS.

Once built, the static output files can then be hosted on GitHub, Netlify, SurgeSH or AWS S3.

## TailwindCSS

TailwindCSS is a utility CSS framework. That means you don't need to write CSS. Tailwind provides all the CSS classes for you
to build your page.

To modify TailwindCSS's theme, edit the file `tailwind.config.js`

To create new `tailwind.css` file in `/public/css`, run `yarn css`

## NextJS and ReactJS

- `ReactJS` is used to build out the page

- `NextJS` is used to create the static output, by running `yarn out`

## Common CLI

- `yarn` Install the node_modules
- `yarn dev` Develop the pages on `http://localhost:3000`
- `yarn build` Built optimised Production build
- `yarn start` Run the server and serve the Proudciton build
- `yarn out` Output into Static files in the `out` folder. Deploy the content of the `out` folder as the static websites.

## Notes

- Node 10
- Unplash API for random photos: https://source.unsplash.com/1500x1000/?nature,water

## Credits

- Free Doodles from Open Doodles https://www.opendoodles.com/
- Free SVG icons from Linear Icons https://linearicons.com/free
- Favicons generated by Favicon.io https://favicon.io/
- Tailwind.css is generated by running "yarn css"