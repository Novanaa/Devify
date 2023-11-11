import DocsLayout from "@/layouts/DocsLayout";
import renderMDX from "@/services/renderMDX";

export async function getStaticProps() {
  const { mdxContent, frontmatter } = await renderMDX(
    "single-categories.mdx",
    "books"
  );
  return { props: { mdxContent: String(mdxContent), frontmatter } };
}

function SingleCategories({ mdxContent, frontmatter }) {
  return <DocsLayout content={mdxContent} frontmatter={frontmatter} />;
}

export default SingleCategories;
