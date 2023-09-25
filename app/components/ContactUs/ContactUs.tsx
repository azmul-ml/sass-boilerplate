import Image from "next/image";
import cx from "classnames";
import styles from "./ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div className={cx("container-xxl", styles.contactUs)}>
      <section className={styles.leftSide}>
        <h1>Did you know us? </h1>
        <p>
          We are about books and our purpose is to show you the book who can
          chage your life or distract you from the real world în a better one.
          BWorld works with the must popular publishs just for your delight. If
          you are about books, you must to subscribe to our newsletter.{" "}
        </p>
        <form
          tabIndex={2}
          role="searchbox"
          className={styles.contactForm}
          action="#"
        >
          <input
            role="search"
            aria-describedby="search"
            type="text"
            placeholder="Your Name"
            name="name"
          />
          <input
            role="search"
            aria-describedby="search"
            type="text"
            placeholder="Your email"
            name="email"
          />
        </form>
        <button>Subscribe</button>
      </section>
      <section className={styles.rightSide}>
        <Image
          src={"/assets/images/mapsicle-map.png"}
          width={576}
          height={466}
          alt="Map"
        />
      </section>
    </div>
  );
}
