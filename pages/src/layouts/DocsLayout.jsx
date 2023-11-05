import React from "react";
import DocsNavbar from "@/components/DocsNavbar/DocsNavbar";
import index from "./styles/DocsLayout.module.css";
import DocsFooter from "@/components/DocsFooter/DocsFooter";
import Layout from "./Layout";
import RenderMDX from "@/components/RenderMDX/RenderMDX";

function DocsLayout({ content, frontmatter }) {
  const description =
    frontmatter.description == undefined ? "Docs" : frontmatter.description;
  const title = frontmatter.title == undefined ? "Docs" : frontmatter.title;
  return (
    <>
      <Layout
        title={`Devify - ${title}`}
        description={description}
        usage="docs"
      >
        <div className={index.container}>
          <DocsNavbar />
          <main className={index.mainChildren}>
            <RenderMDX content={content} frontmatter={frontmatter} />
          </main>
          <DocsFooter docs={frontmatter} html={content} />
        </div>
      </Layout>
    </>
  );
}

export default DocsLayout;
