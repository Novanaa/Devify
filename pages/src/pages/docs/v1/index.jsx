import DocsLayout from "@/layouts/DocsLayout";
import renderMDX from "@/services/renderMDX";

export async function getStaticProps() {
  const { mdxContent, frontmatter } = await renderMDX("index.mdx");
  return { props: { mdxContent: String(mdxContent), frontmatter } };
}

function Introduction({ mdxContent, frontmatter }) {
  return <DocsLayout content={mdxContent} frontmatter={frontmatter} />;
}

export default Introduction;
