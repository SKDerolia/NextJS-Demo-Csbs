'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const apple = (item) => {
    alert(item)
  }
  return (
    <main className={styles.main}>
      Home Page
      <button onClick={() => apple("Yoo")}>Click me</button>
      <br />
      <br />
      <Link href="/about">About Page</Link>
      <Link href="/login">Login Page</Link>
      <Link href="/studentlist">Student List Page</Link>
      <Link href="/study">Study Page</Link>
      <Link href="/productlist">Product List Page</Link>

    </main>
  );
}
