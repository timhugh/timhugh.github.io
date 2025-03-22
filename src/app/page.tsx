import React from "react";
import Link from "next/link";
// import RecentPosts from "@/components/RecentPosts";

export default function About(): JSX.Element {
  return (
    <main className="justify-around">
      <div className="text-lg">
        <p>Hi, I&apos;m Tim.</p>
        <p>I live in Seattle, WA.</p>
        <p>
          I{" "}
          <Link href="//github.com/timhugh" target="_blank">
            write software
          </Link>{" "}
          and{" "}
          <Link href="//instagram.com/timhugh" target="_blank">
            take photos
          </Link>
          .
        </p>
      </div>
      {/* <RecentPosts /> */}
    </main>
  );
}
