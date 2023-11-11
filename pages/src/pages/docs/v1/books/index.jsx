import DocsLayout from "@/layouts/DocsLayout";
import renderMDX from "@/services/renderMDX";

export async function getStaticProps() {
  const { mdxContent, frontmatter } = await renderMDX("index.mdx", "books");
  return { props: { mdxContent: String(mdxContent), frontmatter } };
}

function AllBooks({ mdxContent, frontmatter }) {
  return <DocsLayout content={mdxContent} frontmatter={frontmatter} />;
}

export default AllBooks;
