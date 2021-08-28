import { BiUpArrow } from "react-icons/bi";

import styles from "./scrollup.module.scss";

export function ScrollUp() {
  function scrollToTop(scrollPos) {
    // Do something with the scroll position
    window.scrollTo(0, 0);
  }

  return (
    <div className={styles.scrollUp}>
      <button onClick={scrollToTop}>
        <BiUpArrow fontSize="1.5em" />
      </button>
    </div>
  );
}
