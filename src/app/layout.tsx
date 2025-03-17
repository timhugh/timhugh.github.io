import { Courier_Prime, Lato } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./global.css";
import Header from "./header";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export const metadata: Metadata = {
	title: {
		default: "Tim Heuett",
		template: "%s | Tim Heuett",
	},
};

const lato = Lato({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-serif",
});

const courier = Courier_Prime({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-serif",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lato.variable} ${courier.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
