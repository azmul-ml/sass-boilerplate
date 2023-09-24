import Image from "next/image";
import cx from "classnames";
import styles from "./Benefits.module.scss";

export default function Benefits() {
    return (
        <ul className={cx("container-xxl", styles.benefits)}>
            <li><Image src="/assets/svg/car.svg" width={34} height={34} alt="Car"  /> <span>Free shiping over 50$ </span></li>
            <li className={styles.borderItem}><Image src="/assets/svg/star.svg" width={30} height={30} alt="Star"  /> <span>Save with loyalty points </span></li>
            <li><Image src="/assets/svg/book.svg" width={30} height={30} alt="Book"  /> <span>Read a few pages </span></li>
        </ul>
    )
}