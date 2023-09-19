import styles from "./PublisherInfo.module.scss";

export default function PublisherInfo() {
  return (
    <section aria-labelledby="Publisher Info" aria-describedby="Publisher Info" className={styles.publisherInfo}>
        <ul role="list">
            <li tabIndex={32} role="listitem"><span>Publisher :</span><span>Margaret K. Books</span></li>
            <li tabIndex={33} role="listitem"><span>Language :</span><span>English</span></li>
            <li tabIndex={34} role="listitem"><span>Print length :</span><span>592 pages</span></li>
        </ul>
        <ul>
            <li tabIndex={35} role="listitem"><span>Publication date :</span><span>March 3, 2020</span></li>
            <li tabIndex={36} role="listitem"><span>Reading age :</span><span>14+</span></li>
            <li tabIndex={37} role="listitem"><span>Dimensions :</span><span>6 x 1.8 x 9 inches</span></li>
        </ul>
    </section>
  )
}