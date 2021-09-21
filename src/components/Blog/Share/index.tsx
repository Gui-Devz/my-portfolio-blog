import { useRouter } from "next/dist/client/router";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";

import styles from "./share.module.scss";
import { useEffect, useState } from "react";

export function Share() {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.href);
  }, []);

  return (
    <div className={styles.container}>
      <p>Share this post:</p>
      <div>
        <span>
          <LinkedinShareButton url={path}>
            <FaLinkedin size="2em" />
          </LinkedinShareButton>
        </span>
        <span>
          <FacebookShareButton url={path}>
            <FaFacebookF size="1.7em" />
          </FacebookShareButton>
        </span>
        <span>
          <TwitterShareButton url={path}>
            <FaTwitter size="2em" />
          </TwitterShareButton>
        </span>
        <span>
          <WhatsappShareButton url={path}>
            <FaWhatsapp size="2em" />
          </WhatsappShareButton>
        </span>
        <span>
          <TelegramShareButton url={path}>
            <FaTelegram size="1.8em" />
          </TelegramShareButton>
        </span>
      </div>
    </div>
  );
}
