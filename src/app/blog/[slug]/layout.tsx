import React from "react";
import { ArrowLeft } from "react-feather";
import BackLink from "@/components/BackLink";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<div className="w-full text-left max-w-6xl">
				<ArrowLeft aria-label="Back arrow" className="inline h-3" />
				<BackLink>Back to list</BackLink>
			</div>
			<article>{children}</article>
		</main>
	);
}
