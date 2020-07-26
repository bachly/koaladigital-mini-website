const glob = require("glob");

module.exports = {
  webpack: (config, options) => {
    const { isServer } = options;
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["body"] },
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        exclude: config.exclude,
        use: [
          {
            loader: require.resolve("url-loader"),
            options: {
              limit: config.inlineImageLimit,
              fallback: require.resolve("file-loader"),
              publicPath: `${config.assetPrefix}/_next/static/images/`,
              outputPath: `${isServer ? "../" : ""}static/images/`,
              name: "[name]-[hash].[ext]",
              esModule: config.esModule || false,
            },
          },
        ],
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
