import { useEffect, useState } from "react";
import { BiUpArrow } from "@react-icons/all-files/bi/BiUpArrow";

import styles from "./scrollup.module.scss";

export function ScrollUp() {
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0);

  function scrollToTop() {
    // Do something with the scroll position
    window.scrollTo(0, 0);
    return;
  }

  function settingTheScrollPosition() {
    setLastKnownScrollPosition(window.scrollY);
  }

  useEffect(() => {
    document.addEventListener("scroll", settingTheScrollPosition, false);

    return () =>
      document.removeEventListener("scroll", settingTheScrollPosition, false);
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
