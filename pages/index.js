import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <div className={styles.description}>
          <p>
            Hunting Coder &nsp;
            <code className={styles.code}>
              A blog for hunting coders by a hunting coder
            </code>
          </p>
        </div> */}
        <h1>Blog App</h1>
        <div className="blogs">
          <div className={styles.blogItem}>
            <h2>Blogs Heading</h2>
            <p>Blogs content</p>
          </div>
        </div>

        <div className="blogs">
          <div className={styles.blogItem}>
            <h2>Blogs Heading</h2>
            <p>Blogs content</p>
          </div>
        </div>

        <div className="blogs">
          <div className={styles.blogItem}>
            <h2>Blogs Heading</h2>
            <p>Blogs content</p>
          </div>
        </div>

        <div className="blogs">
          <div className={styles.blogItem}>
            <h2>Blogs Heading</h2>
            <p>Blogs content</p>
          </div>
        </div>

        <div className="blogs">
          <div className={styles.blogItem}>
            <h2>Blogs Heading</h2>
            <p>Blogs content</p>
          </div>
        </div>

        <div className={styles.center}></div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
