import Image from "next/image";
import Link from "next/link";

import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "./post-content.module.scss";

interface PostContentProps {
  content: Document;
}

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
                  <a target="_blank">
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
                  <a target="_blank">
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
                  <a target="_blank">
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
            <a target="_blank">{node.content[0].value}</a>
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
