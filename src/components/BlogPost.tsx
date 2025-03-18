"use client";

import React, { useEffect } from "react";
import TimeStamp from "./TimeStamp";
import hljs from "highlight.js";

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import cpp from "highlight.js/lib/languages/cpp";
hljs.registerLanguage("cpp", cpp);

interface BlogPostProps extends React.ComponentProps<"article"> {
	title: string;
	date: Date;
}

export default function BlogPost({
	title,
	date,
	children,
	...props
}: BlogPostProps) {
	useEffect(() => {
		hljs.initHighlighting();
	}, []);

	return (
		<article {...props}>
			<h1>{title}</h1>
			<TimeStamp date={date} />
			{children}
		</article>
	);
}
