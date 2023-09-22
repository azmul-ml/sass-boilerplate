"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cx from "classnames";
import { wrap } from "popmotion";
import { images } from "../../constants/images";
import { sliderVariants } from "../../helpers/motion";
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={cx("container-xxl", styles.homeHero)}>
        <motion.section
          key={`slider-${imageIndex}`}
          className={styles.sliderMainSection}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          custom={direction}
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 1 }
          }}
        >
          <aside className={styles.bookInfoPart}>
            <div className={styles.sliderNavigation}>
              {images.map((img, index) => <div className={cx({[styles.active]: index === imageIndex})} key={`image-${index}`} style={{ height: `${Math.floor(75/images.length)}%` }} />)}
            </div>
            <div className={styles.bookInfo}>
              <button>Author of august</button>
              <h1 className="mb-32 mt-32">Eric-Emanuel Schmitt {imageIndex+1}</h1>
              <p className="mt-32 mb-40">
                Eric-Emmanuel Schmitt has been awarded more than 20 literary
                prizes and distinctions, and in 2001 he received the title of
                Chevalier des Arts et des Lettres. His books have been
                translated into over 40 languages.
              </p>
              <button>View his boooks</button>
            </div>
          </aside>
          <aside className={styles.bookImagePart}>
            <p className={styles.textPart}>Autographed books + 30% discount</p>
            <div className={styles.imagePart}>
              <Image key={imageIndex} src={images[imageIndex]} width={324} height={452} alt="Book" />
              <p>*within the stock limit</p>
            </div>
          </aside>
        </motion.section>

      <ul className={styles.sliderArrow}>
        <li tabIndex={24} onClick={() => paginate(-1)}>
          &lsaquo;
        </li>
        <li tabIndex={25} onClick={() => paginate(1)}>
          &rsaquo;
        </li>
      </ul>
    </div>
  );
};

export default HomeHero;
