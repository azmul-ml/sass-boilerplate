import styles from "./BreadCrumbs.module.scss";

export default function BreadCrumbs() {
  return (
    <ul role="navigation" className={styles.breadcrumb}>
      <li role="listitem" tabIndex={17}><a role="link" type="link" rel="noreferrer" aria-label="Home" href="#">Home</a></li>
      <li role="listitem" tabIndex={18}><a role="link" type="link" rel="noreferrer" aria-label="Fantasy books" href="#">Fantasy books</a></li>
      <li role="listitem" tabIndex={19}>Chain of Gold</li>
   </ul>
  )
}