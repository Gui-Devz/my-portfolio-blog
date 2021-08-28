import { FiSend } from "react-icons/fi";

import styles from "./contactme.module.scss";

export function ContactMe() {
  return (
    <>
      <h2 id="contactme" className={styles.H2}>
        Let&apos;s work together
      </h2>
      <section className={styles.contactMe}>
        <form>
          <div>
            <label htmlFor="name">Name*:</label>
            <input name="name" type="text" placeholder="your name" />
          </div>
          <div>
            <label htmlFor="email">Email*:</label>
            <input name="email" type="text" placeholder="your email" />
          </div>
          <div className={styles.textArea}>
            <label htmlFor="message">Message*:</label>
            <textarea
              name="message"
              placeholder="enter here your message"
              cols={40}
              rows={5}
            />
          </div>

          <button type="submit">
            Send
            <span>
              <FiSend />
            </span>
          </button>
        </form>
      </section>
    </>
  );
}
