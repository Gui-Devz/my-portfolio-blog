import { useRouter } from "next/dist/client/router";
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";

import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaTelegram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";

import styles from "./share.module.scss";

export function Share() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className={styles.container}>
      <p>Share this post:</p>
      <div>
        <span>
          <LinkedinShareButton url={path}>
            <AiFillLinkedin size="2em" />
          </LinkedinShareButton>
        </span>
        <span>
          <FacebookShareButton url={path}>
            <FaFacebookF size="1.7em" />
          </FacebookShareButton>
        </span>
        <span>
          <TwitterShareButton url={path}>
            <FiTwitter size="2em" />
          </TwitterShareButton>
        </span>
        <span>
          <WhatsappShareButton url={path}>
            <RiWhatsappFill size="2em" />
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
