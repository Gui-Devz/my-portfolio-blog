import { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";

import styles from "./scrollup.module.scss";

export function ScrollUp() {
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0);

  function scrollToTop() {
    // Do something with the scroll position
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setLastKnownScrollPosition(window.scrollY);
    });
  }, []);
  return (
    <>
      {lastKnownScrollPosition >= 200 && (
        <div className={styles.scrollUp}>
          <button onClick={scrollToTop}>
            <BiUpArrow fontSize="1.5em" />
          </button>
        </div>
      )}
    </>
  );
}
