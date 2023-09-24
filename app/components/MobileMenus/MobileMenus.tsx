import Image from "next/image";
import cx from "classnames";
import styles from "./MobileMenus.module.scss";

interface MobileMenusProps{
  isShowMobileMenu: boolean;
}

export default function MobileMenus({ isShowMobileMenu }: MobileMenusProps) {
  return (
    <menu className={cx(styles.mobileMenus, {[styles.mobileMenuHide]: !isShowMobileMenu, [styles.mobileMenuShow]: isShowMobileMenu})}>
      <ul role="navigation">
      <li role="listitem" tabIndex={3}>
        <a
          role="link"
          type="link"
          rel="noreferrer"
          aria-label="Privacy policy"
          href="#"
        >
          Privacy policy
        </a>
      </li>
      <li role="listitem" tabIndex={4}>
        <a
          role="link"
          type="link"
          rel="noreferrer"
          aria-label="Warranty"
          href="#"
        >
          Warranty
        </a>
      </li>
      <li role="listitem" tabIndex={5}>
        <a
          role="link"
          type="link"
          rel="noreferrer"
          aria-label="Shippping"
          href="#"
        >
          Shippping
        </a>
      </li>
      <li role="listitem" tabIndex={6}>
        <a
          role="link"
          type="link"
          rel="noreferrer"
          aria-label="Returns"
          href="#"
        >
          Returns
        </a>
      </li>
      </ul>
      <ul role="navigation">
      <li role="listitem" tabIndex={10}>
        <a
          role="link"
          type="link"
          aria-label="The must read"
          rel="noreferrer"
          href="#"
        >
          The must read
        </a>
      </li>
      <li role="listitem" tabIndex={11}>
        <a role="link" type="link" aria-label="News" rel="noreferrer" href="#">
          News
        </a>
      </li>
      <li role="listitem" tabIndex={12}>
        <a
          role="link"
          type="link"
          aria-label="Promotion of the mount"
          rel="noreferrer"
          href="#"
        >
          Promotion of the mount{" "}
        </a>
      </li>
      <li role="listitem" tabIndex={13}>
        <a
          role="link"
          type="link"
          aria-label="Plublishs"
          rel="noreferrer"
          href="#"
        >
          Plublishs
        </a>
      </li>
      <li role="listitem" tabIndex={14}>
        <a
          role="link"
          type="link"
          aria-label="Subscribe to the newsletter"
          rel="noreferrer"
          href="#"
        >
          Subscribe to the newsletter
        </a>
      </li>
      <li role="listitem" tabIndex={15}>
        <Image src="/assets/svg/phone.svg" alt="PHONE" width={20} height={15} />
        &nbsp;&nbsp;
        <a
          role="link"
          aria-label="Phone Number"
          type="link"
          rel="noreferrer"
          href="#"
        >
          +445 87 999 000
        </a>
      </li>
      <li role="listitem" tabIndex={16}>
        <a type="button" aria-label="Request a call" href="#">
          Request a call
        </a>
      </li>
      </ul>
    </menu>
  );
}
