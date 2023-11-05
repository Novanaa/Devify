import DocsLayout from "@/layouts/DocsLayout";
import renderMDX from "@/services/renderMDX";

export async function getStaticProps({}) {
  const { mdxContent, frontmatter } = await renderMDX(
    "all-categories.mdx",
    "books"
  );
  return { props: { mdxContent: String(mdxContent), frontmatter } };
}

function AllCategories({ mdxContent, frontmatter }) {
  return <DocsLayout content={mdxContent} frontmatter={frontmatter} />;
}

export default AllCategories;
