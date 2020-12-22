const glob = require("glob");

module.exports = {
  webpack: (config, options) => {
    // const { isServer } = options;
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["body"] },
      }
    );
    return config;
  },
  exportPathMap: async function () {
    /**
     * Define the static page paths
     */

    const paths = {
      "/": { page: "/" }, // Homepage path: '/'
      // "/about": { page: "/about" } // About path: '/about'
    }

    // Project paths: '/projects/[slug]'
    const projects = glob.sync("content/projects/*.md");
    const projectSlugs = projects.map((file) => file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim());
    projectSlugs.forEach((slug) => {
      paths[`/project/${slug}`] = { page: "/project/[slug]", query: { slug } };
    });

    console.log("> Exporting following paths:", paths);

    return paths;
  },
};
