import cx from "classnames";
import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div
        className={cx("container-xxl pt-48 pb-48", styles.footerContentSection)}
      >
        <section className={styles.firstSection}>
          <ul>
            <li>
              <a href="#">B-World</a>
            </li>
          </ul>
        </section>

        <section className={styles.secondSection}>
          <ul>
            <li>
              <h4>Categories </h4>
            </li>
            <li>
              <a href="#">Psychology</a>{" "}
            </li>
            <li>
              <a href="#">Self-Help</a>
            </li>
            <li>
              <a href="#">Romance</a>
            </li>
            <li>
              <a href="#">Mystery</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>For kids</h4>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">Comes</a>
            </li>
            <li>
              <a href="#">Fantasy</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>E-Books </h4>
            </li>
            <li>
              <a href="#">Fiction</a>
            </li>
            <li>
              <a href="#">Historical</a>
            </li>
            <li>
              <a href="#">Horror</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Help & Contacts </h4>
            </li>
            <li>
              <a href="#">+445 87 999 000</a>
            </li>
            <li>
              <a href="#">Mo-Fri, 9 AM to 11 PM</a>
            </li>
            <li>
              <a href="#">b.world@store.ro</a>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                If you have questions, you can contact us or we will do it for
                you.
              </p>
            </li>
            <li>
              <button>Request a call</button>
            </li>
          </ul>
        </section>
        <section className={styles.iconSection}>
          <ul>
            <li>
              <ul>
                <li>
                  <Image
                    src="/assets/svg/facebook.svg"
                    width={28}
                    height={28}
                    alt="FaceBook"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/svg/instagram.svg"
                    width={28}
                    height={28}
                    alt="FaceBook"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/svg/twitter.svg"
                    width={28}
                    height={28}
                    alt="FaceBook"
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <Image
                    src="/assets/svg/paypal.svg"
                    width={44}
                    height={28}
                    alt="FaceBook"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/svg/mastercard.svg"
                    width={44}
                    height={28}
                    alt="FaceBook"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/svg/visa.svg"
                    width={44}
                    height={28}
                    alt="FaceBook"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
      <div className={styles.footerBorder} />
      <p className={cx("pt-16 pb-16", styles.copyRight)}>
        © All copyrights are reserved. B-World 2022.{" "}
      </p>
    </footer>
  );
}
