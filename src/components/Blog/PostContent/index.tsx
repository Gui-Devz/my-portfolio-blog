import Image from "next/image";
import Link from "next/link";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";
import sql from "react-syntax-highlighter/dist/cjs/languages/hljs/sql";
import css from "react-syntax-highlighter/dist/cjs/languages/hljs/css";
import scss from "react-syntax-highlighter/dist/cjs/languages/hljs/scss";
import json from "react-syntax-highlighter/dist/cjs/languages/hljs/json";
import atomOneDarkReasonable from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";

import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { FaRegClipboard } from "@react-icons/all-files/fa/FaRegClipboard";

import styles from "./post-content.module.scss";

interface PostContentProps {
  content: Document;
}

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("json", json);

export function PostContent({ content }: PostContentProps) {
  const options = {
    renderMark: {},
    renderNode: {
      [BLOCKS.PARAGRAPH]: function Paragraph(node, children) {
        const paragraphChild = node.content[0].marks[0]?.type;

        if (paragraphChild === "code") {
          return <div className={styles.codeBlock}>{children}</div>;
        }
        return <p>{children}</p>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: function codes(node) {
        return (
          <div className={styles.codeContainer}>
            <p className={styles.languageCode}>
              {node.data.target.fields.language}
            </p>
            <div className={styles.codeContent}>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(node.data.target.fields.code)
                }
              >
                <FaRegClipboard />
                <span>Copy</span>
              </button>
              <SyntaxHighlighter
                language={node.data.target.fields.language}
                style={atomOneDarkReasonable}
                showLineNumbers
              >
                {node.data.target.fields.code}
              </SyntaxHighlighter>
            </div>
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetType = node.data.target.fields.file.contentType;

        switch (assetType) {
          case "video/mp4":
            return (
              <video width="100%" height="100%" controls>
                <source
                  src={node.data.target.fields.file.url}
                  type="video/mp4"
                />
              </video>
            );
          case "image/png":
            return (
              <>
                <Link href={`https:${node.data.target.fields.file.url}`}>
                  <a target="_blank" rel="noopener">
                    <div className={styles.imageContent}>
                      <Image
                        src={`https:${node.data.target.fields.file.url}?w=660&h=500&fl=progressive`}
                        layout="fill"
                        alt={node.data.target.fields.description}
                      />
                    </div>
                  </a>
                </Link>
              </>
            );
          case "image/jpg":
            return (
              <>
                <Link href={`https:${node.data.target.fields.file.url}`}>
                  <a target="_blank" rel="noopener">
                    <div className={styles.imageContent}>
                      <Image
                        src={`https:${node.data.target.fields.file.url}?w=660&h=500&fl=progressive`}
                        layout="fill"
                        alt={node.data.target.fields.description}
                      />
                    </div>
                  </a>
                </Link>
              </>
            );
          case "image/gif":
            return (
              <>
                <Link href={`https:${node.data.target.fields.file.url}`}>
                  <a target="_blank" rel="noopener">
                    <div className={styles.imageContent}>
                      <Image
                        src={`https:${node.data.target.fields.file.url}?fit=pad&w=660&h=500`}
                        layout="fill"
                        alt={node.data.target.fields.description}
                      />
                    </div>
                  </a>
                </Link>
              </>
            );
          default:
            return "Nothing to see here...";
        }
      },
      [INLINES.HYPERLINK]: function Links(node) {
        return (
          <Link href={node.data.uri}>
            <a target="_blank" rel="noopener">
              {node.content[0].value}
            </a>
          </Link>
        );
      },
    },
  };

  return (
    <div className={styles.container}>
      <section className={styles.post}>
        {documentToReactComponents(content, options)}
      </section>
    </div>
  );
}
