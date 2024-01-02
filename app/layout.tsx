import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AntConfigProvider from "@/providers/AntConfigProvider";
import QueryProvider from "@/providers/QueryProvider";
import Navbar from "@/components/Navbar";
import "@/styles/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blog",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<QueryProvider>
				<AntConfigProvider>
					<body className={inter.className}>
						<Navbar />
						{children}
					</body>
				</AntConfigProvider>
			</QueryProvider>
		</html>
	);
}
