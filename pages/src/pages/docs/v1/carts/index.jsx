import DocsLayout from "@/layouts/DocsLayout";
import renderMDX from "@/services/renderMDX";

export async function getStaticProps() {
  const { mdxContent, frontmatter } = await renderMDX("index.mdx", "carts");
  return { props: { mdxContent: String(mdxContent), frontmatter } };
}

function AllCarts({ mdxContent, frontmatter }) {
  return <DocsLayout content={mdxContent} frontmatter={frontmatter} />;
}

export default AllCarts;
