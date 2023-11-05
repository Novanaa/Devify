import fs from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import addClasses from "rehype-add-classes";

export default async function renderMDX(fileName = "", usage = "main") {
  const filesDir = "./src/pages/docs/components";
  const dir =
    {
      main: `${filesDir}/${fileName}`,
      auth: `${filesDir}/auth/${fileName}`,
      products: `${filesDir}/products/${fileName}`,
      users: `${filesDir}/users/${fileName}`,
      carts: `${filesDir}/carts/${fileName}`,
      books: `${filesDir}/books/${fileName}`,
    }[usage] || null;
  const readFile = fs.readFileSync(dir, "utf-8");
  const { data: frontmatter, content } = matter(readFile);
  const mdxContent = await unified()
    .data("settings", { fragment: true })
    .use(remarkHtml)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "dark-plus",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(remarkGfm)
    .use(rehypeAutolinkHeadings, {
      behavior: "",
      properties: {},
      content() {
        return [];
      },
    })
    .use(addClasses, {
      li: "list-li",
    })
    .process(content);

  return { mdxContent, frontmatter };
}
