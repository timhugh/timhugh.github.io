"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="font-light text-lg leading-10 text-center">
				<p className="pb-2">Hi, I&apos;m Tim.</p>
				<p className="pb-2">I live in Seattle, WA.</p>
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
		</main>
	);
}
