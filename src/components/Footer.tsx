"use client";

import React from "react";

export default function Footer(): JSX.Element {
	const date = new Date().getFullYear();
	return (
		<footer className="sticky bottom-0 font-serif font-light text-right">
			<span className="p-2 bg-background dark:bg-foreground bg-opacity-75 dark:bg-opacity-75 rounded-3xl">
				&copy; {date} Tim Heuett
			</span>
		</footer>
	);
}
