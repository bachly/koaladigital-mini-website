const glob = require("glob");

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["body"] },
      },
      {
        test: /\.(mp3|aif)$/,
        use: {
          loader: "file-loader",
        },
      }
    );
    return config;
  },
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/pomotag": { page: "/pomotag" },
      "/freightZoneCalculator": { page: "/freightZoneCalculator" },
      "/triviaSlides": { page: "/triviaSlides" },
    };

    // get all .md files in the lists dir
    // const blogs = glob.sync("content/lists/**/*.md");

    // // remove path and extension to leave filename only
    // const blogSlugs = blogs.map((file) => {
    //   return file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim();
    // });

    // // add each list to the paths obj
    // blogSlugs.forEach((slug) => {
    //   paths[`/list/${slug}`] = { page: "/list/[slug]", query: { slug } };
    // });

    console.log("> Exporting following paths:", paths);

    return paths;
  },
};
