"use client";

import Image from "next/image";
import cx from "classnames";
import { useState } from "react";
import SubHeader from "./SubHeader/SubHeader";
import MobileMenus from "../MobileMenus/MobileMenus";
import styles from "./Header.module.scss";

export default function Header() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  return (
    <header>
      <nav className={cx("container-xxl", styles.navbar)}>
        <div aria-label="Logo and Search Box" aria-describedby="Logo and mobile Search Box">
          <span role="figure" tabIndex={1} className={styles.logo}>
            <Image role="logo" src="/assets/images/logo.png" aria-live="polite" alt="LOGO" width={140} height={35} />
          </span>
          <Image className={styles.mobileSearchIcon} role="search" src="/assets/svg/mobile-search.svg" aria-live="polite" alt="Mobile Search" width={25} height={25} />
        </div>
  
        <form tabIndex={2} role="searchbox" className={styles.formSearch} action="#">
          <input role="search" aria-describedby="search" type="text" placeholder="Type any book here" name="search" />
          <button type="submit"><Image src="/assets/svg/search.svg" aria-live="polite" alt="Search" width={20} height={20} /></button>
        </form>
        <ul role="navigation" className={styles.menus}>
          <li role="listitem" tabIndex={3}><a role="link" type="link" rel="noreferrer" aria-label="Privacy policy" href="#">Privacy policy</a></li>
          <li role="listitem" tabIndex={4}><a role="link" type="link" rel="noreferrer" aria-label="Warranty" href="#">Warranty</a></li>
          <li role="listitem" tabIndex={5}><a role="link" type="link" rel="noreferrer" aria-label="Shippping" href="#">Shippping</a></li>
          <li role="listitem" tabIndex={6}><a role="link" type="link" rel="noreferrer" aria-label="Returns" href="#">Returns</a></li>
        </ul>
        <ul role="navigation" className={styles.icons}>
          <li role="listitem" tabIndex={7}><Image src="/assets/svg/cart.svg" alt="Cart" width={20} height={20} /></li>
          <li role="listitem" tabIndex={8}><Image src="/assets/svg/notification.svg" alt="Notification" width={20} height={20} /></li>
          <li role="listitem" tabIndex={9}><Image src="/assets/svg/profile.svg" alt="Profile" width={20} height={20} /></li>
        </ul>
        <ul role="navigation" className={styles.hamburger}>
          <li role="listitem" tabIndex={9}><Image src="/assets/svg/profile.svg" alt="Profile" width={20} height={20} /></li>
          <li onClick={() => setIsShowMobileMenu(!isShowMobileMenu)} role="listitem" tabIndex={8}><Image src="/assets/svg/hamburger.svg" alt="Hamburger" width={20} height={20} /></li>
        </ul>

        <ul role="navigation" className={cx(styles.menuItems, {'dn': !isShowMobileMenu, 'db': isShowMobileMenu})}>
          <MobileMenus />
        </ul>
        
      </nav>
      <SubHeader />
    </header>
  )
}