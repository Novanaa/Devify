import DocsLayout from "@/layouts/DocsLayout";
import renderMDX from "@/services/renderMDX";

export async function getStaticProps({}) {
  const { mdxContent, frontmatter } = await renderMDX("index.mdx", "products");
  return { props: { mdxContent: String(mdxContent), frontmatter } };
}

function AllProducts({ mdxContent, frontmatter }) {
  return <DocsLayout content={mdxContent} frontmatter={frontmatter} />;
}

export default AllProducts;
