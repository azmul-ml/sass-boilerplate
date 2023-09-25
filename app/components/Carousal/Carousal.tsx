"use client";

import Carousel from "react-multi-carousel";
import Image from "next/image";
import cx from "classnames";
import { images } from "../../constants/images"
import styles from "./Carousal.module.scss";

interface CarousalProps {
    title: string
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  },
};


export default function Carousal({ title }: CarousalProps) {
  return (
    <div className={cx("container-xxl", styles.parent)}>
        <h2>{title}</h2>
      <Carousel
        responsive={responsive}
        showDots={true}
        slidesToSlide={1}
        itemClass="image-item"
        draggable={true}
        autoPlay={true}
        infinite={true}
        arrows={false}
        partialVisible
        dotListClass="custom-dot-list-style"
      >
        {images.map((image, index) => {
          return (
            <div className="slider" key={index}>
              <Image key={image} src={image} width={274} height={414} alt={image} />{" "}
              <h4 className={styles.bookName}>Financial Feminist {index+1}</h4>
              <p className={styles.writerName}>Tori Dunlap {index+1}</p>
              <ul>
                <li><h4>${Math.floor(Math.random() * 90 + 10)}.{Math.floor(Math.random() * 90 + 10)}</h4></li>
                <li><Image src="/assets/svg/love.svg" width={24} height={24} alt="Cart" /> </li>
               </ul>
              <button><Image src="/assets/svg/cart-white.svg" width={24} height={24} alt="Cart" /> <span>Add to cart</span> </button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
