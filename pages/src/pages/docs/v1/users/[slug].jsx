import React from "react";
import fs from "fs";
import renderMDX from "@/services/renderMDX";
import DocsLayout from "@/layouts/DocsLayout";

export async function getStaticPaths() {
  const dir = "./src/pages/docs/components/users";
  const files = fs.readdirSync(dir);
  const paths = files
    .filter(
      (file) =>
        file.includes(".mdx") && file !== "index.mdx" && file !== "index"
    )
    .map((file) => ({ params: { slug: file.replace(".mdx", "") } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { mdxContent, frontmatter } = await renderMDX(`${slug}.mdx`, "users");
  return { props: { mdxContent: String(mdxContent), frontmatter } };
}

function Docs({ mdxContent, frontmatter }) {
  return <DocsLayout content={mdxContent} frontmatter={frontmatter} />;
}

export default Docs;
