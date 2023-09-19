"use client"
import { useState } from "react";
import styles from "./AddItem.module.scss";

export default function AddItem() {
  const [count, setCount] = useState(1);
  
  return (
    <ul className={styles.addItems}>
      <li onClick={() => setCount(count - 1)}>-</li>
      <li>{count}</li>
      <li onClick={() => setCount(count + 1)}>+</li>
    </ul>
  );
}
