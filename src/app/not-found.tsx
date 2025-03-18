import React from "react";
import Link from "next/link";

interface Haiku {
	content: string;
	author: string;
	source: string;
}

const haikus: Haiku[] = [
	{
		content: `The Web site you seek
Cannot be located, but
Countless more exist.`,
		author: "Unknown",
		source: `//www.morro-bay.com/pchelp/haiku.htm`,
	},
	{
		content: `Chaos reigns within.
Reflect, repent, and reboot.
Order shall return.`,
		author: "Suzie Wagner",
		source: `//www.morro-bay.com/pchelp/haiku.htm`,
	},
	{
		content: `Three things are certain:
Death, taxes and lost data.
Guess which has occurred.`,
		author: "Unknown",
		source: `//www.morro-bay.com/pchelp/haiku.htm`,
	},
	{
		content: `You step in the stream,
But the water has moved on.
This page is not here.`,
		author: "Unknown",
		source: `//www.morro-bay.com/pchelp/haiku.htm`,
	},
	{
		content: `Having been erased,
The document you're seeking
Must now be retyped.`,
		author: "Unknown",
		source: `//www.morro-bay.com/pchelp/haiku.htm`,
	},
	{
		content: `Serious error.
All shortcuts have disappeared.
Screen. Mind. Both are blank....`,
		author: "Unknown",
		source: `//www.morro-bay.com/pchelp/haiku.htm`,
	},
];

export default function NotFound() {
	const haiku: Haiku = haikus[Math.floor(Math.random() * haikus.length)];

	return (
		<main>
			<h1 className="text-3xl text-center mb-8 font-serif font-light">
				404 Not Found
			</h1>
			<div>
				<p className="text-lg text-left whitespace-pre-wrap italic mb-4 leading-8">
					{haiku.content}
				</p>
				<p className="text-lg text-right">
					--{" "}
					<Link href={haiku.source} target="_blank">
						{haiku.author}
					</Link>
				</p>
			</div>
		</main>
	);
}
