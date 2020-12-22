import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import Layout from "../components/Layout";
import Link from "next/link";

const PAGE_NAME = 'Homepage';
const PAGE_TITLE = `KoalaDigital | 2-page Mini Website Template`;
const PAGE_DESCRIPTION = `Free-hosting 2-page Website Template for a Profile, Portfolio, CV or Resume • NextJS with TailwindCSS • Static Site export for GitHub, Netlify and SurgeSH`;

export default function HomePage({ projects }) {
  return (
    <Layout pageName={PAGE_NAME} title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
      <div className="bg-white pt-12 text-gray-900">
        <header className="mt-6 lg:mt-64 bg-white lg:px-12">
          <h1 className="px-8 text-3xl lg:text-5xl font-black leading-tight">
            My name is Bach. I am  a Senior Web Developer at Koala Digital.
          </h1>
          <p className="px-8 mt-6 text-2xl lg:text-4xl leading-snug">
            I provide 2 types of services: 1-Software Development: I build, extend, reskin websites, web applications and Shopify stores.
            2-Webmaster/Digital Production: I manage and deliver digital outcomes for your business, incl. marketing, development, designing & consolidated billing.
          </p>
        </header>

        <section className="mt-24 px-0 lg:mt-48 lg:px-12">
          <div className="mx-auto lg:max-w-full">
            <h2 className="text-2xl px-8 lg:text-4xl font-bold leading-tight">
              Sample work
          </h2>
            <div className="flex flex-wrap mt-12 lg:mt-24">
              {projects.map((project, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 mb-16 px-8">
                  <ProjectSnippet key={index} {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 lg:mt-48 px-0 lg:px-16 py-12 lg:py-24 bg-black text-gray-400">
          <div className="px-4 lg:max-w-full">
            <h2 className="text-xl md:text-2xl lg:text-5xl font-bold leading-tight">
              Whether you need to develop something new, fix something broken or just a free advice, please{" "}
              <a className="text-gray-700" href="mailto:bach@koaladigital.com.au">
                email me
            </a>.
          </h2>
          </div>
        </section>
      </div>
    </Layout>
  );
}

HomePage.getInitialProps = async () => {
  const projects = await importProjectsMd();
  return {
    projects
  };
};


/**
 * React component to render Project Snippet
 */
function ProjectSnippet({ attributes, slug }) {
  const { title, description, images } = attributes;
  return (
    <Link href={`/project/${slug}`}>
      <a className="block hover:opacity-75 transition duration-200">
        <div className="relative">
          {images[0] ? (
            <img
              src={images[0].src}
              alt={title}
              className="object-cover rounded-sm border border-gray-300 shadow-md"
            />
          ) : (
              <div className="bg-gray-200 pt-2/3"></div>
            )}
        </div>
        <h3 className="text-xl lg:text-2xl mt-4 mb-2 font-bold">{title}</h3>
        <div className="text-lg lg:text-xl text-gray-900 leading-snug">
          <ReactMarkdown
            escapeHtml={false}
            source={description}></ReactMarkdown>
        </div>
      </a>
    </Link>
  );
}


/**********************************************************/
/******************* Support Functions ********************/
/**********************************************************/

/**
 * Reference:
 * https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
 * second flag in require.context function is TRUE if subdirectories should be searched
 * 
 * BE CAREFUL: 
 * Don't make the '../content/projects' into an external constant or variable. 
 * For some unknown reason, that will break the execution of require.context().
 * Only change the string here.
 */
async function importProjectsMd() {
  const markdownFiles = require
    .context('../content/projects', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/projects/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};
