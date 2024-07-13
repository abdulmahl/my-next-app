import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Home Page Created by Abdul",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
