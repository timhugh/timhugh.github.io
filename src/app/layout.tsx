import { Courier_Prime, Lato } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export const metadata: Metadata = {
	title: {
		default: "Tim Heuett",
		template: "Tim Heuett | %s",
	},
	description: "Tim Heuett's personal website",
	metadataBase: new URL("https://timheuett.com"),
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
	children: JSX.Element;
}>): JSX.Element {
	return (
		<html lang="en">
			<body className={`${lato.variable} ${courier.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
