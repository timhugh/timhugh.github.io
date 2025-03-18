import React from "react";
import { ArrowLeft } from "react-feather";
import BackLink from "@/components/BackLink";

export default function Layout({ children }: { children: JSX.Element }) {
	return (
		<main>
			<div className="w-full text-left max-w-6xl">
				<ArrowLeft aria-label="Back arrow" className="inline h-3" />
				<BackLink>Back</BackLink>
			</div>
			<article>{children}</article>
		</main>
	);
}
