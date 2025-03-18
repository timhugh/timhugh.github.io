import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		li: ({ children }) => (
			<li>
				<span>{children}</span>
			</li>
		),
		...components,
	};
}
