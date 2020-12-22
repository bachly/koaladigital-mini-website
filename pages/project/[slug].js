import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import { IconChevronLeft } from "../../components/Icons";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function ProjectPage({ project }) {
    if (!project) return <div>PROJECT NOT FOUND</div>;

    const {
        attributes: { title, images, description },
        body
    } = project;

    const { basePath } = useRouter();

    return (
        <Layout pageName='ProjectPage' title={title} description={description}>
            <header className="py-4 px-4 border-b border-gray-200">
                <Link href="/">
                    <a className="flex items-center hover:opacity-50 transition duration-200">
                        <span className="w-6 h-6 mr-2"><IconChevronLeft /></span> Home
                    </a>
                </Link>
            </header>
            <article className="my-8 max-w-2xl px-4 mx-auto">
                <div>
                    <img className="block" src={`${basePath}/${images[0].src}`} />
                </div>
                <div className="mt-8">
                    <h1 className="text-4xl leading-tight font-black mb-2 lg:mb-6">{title}</h1>
                    <div className="markdown-content leading-relaxed text-xl">
                        <ReactMarkdown
                            escapeHtml={false}
                            source={body}
                        //renderers={{ code: CodeBlock, image: MarkdownImage }}
                        />
                    </div>
                </div>
                <style jsx>{`
               
            `}</style>
            </article>
        </Layout>
    );
}

ProjectPage.getInitialProps = async ({ query }) => {
    const { slug } = query;
    const project = await import(`../../content/projects/${slug}.md`);
    return { project, attributes: project.attributes };
};