import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Page Created by Abdul",
};

export default function About() {
  // throw new Error("Not Today!");
  return (
    <>
      <h1>About Page...</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
