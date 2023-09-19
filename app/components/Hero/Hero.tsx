import styles from "./Hero.module.scss";
import Image from "next/image";

import Rate from "../Rate/Rate";
import AddItem from "../AddItem/AddItem";
import PublisherInfo from "../PublisherInfo/PublisherInfo";

export default function Hero () {
    return ( 
        <div className={styles.heroContainer} aria-label="Book Details Information">
            <aside className={styles.bookList} aria-label="Book List Images">
                <div className={styles.bookImageLists}>
                  <div tabIndex={20} role="figure">
                    <Image role="img" src="/assets/images/book1.png" alt="Book1" width={59} height={116} aria-live="polite" />
                  </div>
                  <div tabIndex={21} role="figure">
                    <Image role="img" src="/assets/images/book2.png" alt="Book2" width={59} height={116} aria-live="polite" />
                  </div>
                  <div tabIndex={22} role="figure">
                    <Image role="img" src="/assets/images/book3.png" alt="Book3" width={59} height={116} aria-live="polite" />
                  </div>
                  <div tabIndex={23} role="figure">
                    <Image role="img" src="/assets/images/book4.png" alt="Book4" width={59} height={116} aria-live="polite" />
                  </div>
                </div>
                
                <div tabIndex={24} className={styles.bookItem} role="figure" aria-label="Selected Book Image">
                  <Image role="img" src="/assets/images/book.png" alt="Book" width={412} height={652} aria-live="polite" />
                  <ul className={styles.sliderArrow}>
                    <li tabIndex={24}>&lsaquo;</li>
                    <li tabIndex={25}>&rsaquo;</li>
                  </ul>
                </div>
            </aside>
          
            <article className={styles.bookDetails} aria-label="Book Basic information details">
                <h1 role="heading" tabIndex={26} aria-label="Book Title" aria-atomic="true" aria-live="assertive">Chain of Gold: The Last Hours #1</h1>
                <h3 role="heading" tabIndex={27} aria-label="Book Writer" aria-atomic="true" aria-live="assertive">Cassandra Clare</h3>
                <Rate />
                <h2 role="heading" tabIndex={28} aria-label="Book Price" aria-atomic="true" aria-live="assertive">$12.49</h2>
                <p tabIndex={29} className={styles.details} aria-label="Book Description" aria-atomic="true" aria-live="assertive">From #1 New York Times and USA TODAY bestselling author Cassandra Clare comes the first novel in a brand-new trilogy where evil hides in plain sight and love cuts deeper than any blade. Chain of Gold is a Shadowhunters novel.</p>
                <AddItem />
                  <button tabIndex={30} type="button" aria-label="Add to cart" className={styles.cartBtn}>Add to cart</button>
                  <button tabIndex={31} type="button" aria-label="Favorite" className={styles.favoriteBtn}>Favorite</button>
                <div className={styles.border}></div>
                <PublisherInfo />
            </article>
        </div>
     );
}
