import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		input: (props) => {
			if (props.type === "checkbox") {
				return (
					<label className="checkbox">
						<input type="checkbox" {...props} />
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="2">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
							</svg>
						</span>
					</label>
				);
			}
			return <input {...props} />;
		},
	};
}
