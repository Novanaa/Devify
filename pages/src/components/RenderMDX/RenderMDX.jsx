import React from "react";
import NextCta from "../NextCta/NextCta";
import "./styles/RenderMDX.module.css";

function RenderMDX({ content, frontmatter }) {
  return (
    <main>
      <article
        className="prose prose-stone max-[834px]:prose-pre:w-[98.5%] max-[393px]:prose-pre:w-[99%] max-[428px]:prose-pre:w-[99.5%] max-[320px]:prose-sm prose-invert prose-code:text-sm prose-pre:bg-[#242424] prose-a:underline-offset-4 prose-a:font-bold"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></article>
      <NextCta frontmatter={frontmatter} />
    </main>
  );
}

export default RenderMDX;
