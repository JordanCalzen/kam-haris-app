"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname(); // Get current route

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Prevent scrolling when menu is open
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isMenuOpen]);

	// Function to check if the link is active
	const isActive = (path: string) => pathname === path;

	return (
		<header className="w-full border-b bg-gradient-to-r from-green-700 to-green-800 fixed  top-0 z-30 shadow-md">
			<div className="container px-2 py-2">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/kamharis-logo.png"
							alt="Company Logo"
							width={612}
							height={254}
							className="h-20 w-auto"
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{["/", "/about", "/services", "/contact", "/careers"].map(
							(path) => (
								<Link
									key={path}
									href={path}
									className={cn(
										"text-md font-medium text-white transition-colors border-b-2 border-transparent hover:border-white",
										isActive(path) && "border-white"
									)}
								>
									{path === "/"
										? "Home"
										: path.replace("/", "").charAt(0).toUpperCase() +
										  path.slice(2)}
								</Link>
							)
						)}
					</nav>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 rounded-md text-white hover:bg-green-500/30 focus:outline-none focus:ring-2 focus:ring-white"
						onClick={toggleMenu}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{/* Overlay */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 md:hidden"
					onClick={() => setIsMenuOpen(false)}
					aria-hidden="true"
				/>
			)}

			{/* Mobile Menu */}
			<div
				className={cn(
					"fixed top-0 right-0 h-full w-64 z-50 bg-gradient-to-b from-green-700 to-green-800 shadow-xl md:hidden transition-transform duration-300 ease-in-out",
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				)}
			>
				<div className="flex justify-end p-4">
					<button
						className="p-2 rounded-md text-white hover:bg-green-500/30 focus:outline-none focus:ring-2 focus:ring-white"
						onClick={() => setIsMenuOpen(false)}
						aria-label="Close menu"
					>
						<X className="h-6 w-6" />
					</button>
				</div>
				<nav className="flex flex-col px-4 py-6 space-y-6">
					{["/", "/about", "/services", "/contact", "/careers"].map((path) => (
						<Link
							key={path}
							href={path}
							className={cn(
								"text-lg font-medium text-white transition-colors border-b-2 border-transparent hover:border-white",
								isActive(path) && "border-white"
							)}
							onClick={() => setIsMenuOpen(false)}
						>
							{path === "/"
								? "Home"
								: path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
