import React, { ReactNode } from "react";
import {  Block, BLOCKS, Inline, INLINES,Node } from "@contentful/rich-text-types";
import { CodeBlock, getLanguageFromCode } from "./code-blocks";

export const RICHTEXT_OPTIONS = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="text-blue-500 hover:underline">
          {children}
        </a>
      );
    },
    [BLOCKS.OL_LIST]: (node: Node, children: ReactNode) => {
      return <ol className="list-decimal pl-2 md:pl-3 text-xl font-bold">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node: Node, children: ReactNode) => {
      return <ul className="list-disc pl-2 md:pl-3">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node: Node, children: ReactNode) => {
      return <li className="ml-4 mb-2 text-gray-700">{children}</li>;
    },
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: ReactNode) => {
      const nodeHasVideoLink = node?.content.find(
        (content: any) => content.nodeType === "hyperlink"
      );
      if (nodeHasVideoLink) {
        const videoId = nodeHasVideoLink?.data.uri.split("youtu.be/")[1];
        return (
          <div className="vlog">
            <iframe
              className=""
              title="Tutorial Video"
              // width="560"
              // height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            ></iframe>
          </div>
        );
      }
      // Concatenate all code segments in the paragraph
      if (node.content.some((content: any) => content.marks?.[0]?.type === "code")) {
        const codeString = node.content
          .filter((content: any) => content.marks?.[0]?.type === "code")
          .map((content: any) => content.value)
          .join("\n");

        const language = getLanguageFromCode(codeString);
        return (
          <div className="w-full">
            <CodeBlock codeString={codeString} language={language} />
          </div>
        );
      }

      // Render non-code paragraphs as usual
      return <p className="text-gray-700 my-1 text-xl">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node: Node, children: ReactNode) => {
      return <h1 className="text-2xl font-bold text-gray-800 my-3">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node: Node, children: ReactNode) => {
      return <h2 className="text-3xl font-bold text-gray-800 my-3">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node: Node, children: ReactNode) => {
      return <h3 className="text-2xl font-bold text-gray-800 my-3">{children}</h3>;
    },
  },
};
