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
			<hgroup className="pb-10">
				<h1 className="text-5xl font-serif">{title}</h1>
				<TimeStamp
					date={date}
					className="text-foreground_dim_light dark:text-foreground_dim_dark"
				/>
			</hgroup>
			{children}
		</article>
	);
}
