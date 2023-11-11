import DocsLayout from "@/layouts/DocsLayout";
import renderMDX from "@/services/renderMDX";

export async function getStaticProps() {
  const { mdxContent, frontmatter } = await renderMDX("index.mdx", "users");
  return { props: { mdxContent: String(mdxContent), frontmatter } };
}

function AllUsers({ mdxContent, frontmatter }) {
  return <DocsLayout content={mdxContent} frontmatter={frontmatter} />;
}

export default AllUsers;
