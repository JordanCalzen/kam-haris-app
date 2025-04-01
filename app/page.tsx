// import Header from "@/components/header"

import AboutSection from "@/components/frontend/about-section";
import CtaV2 from "@/components/frontend/CtaV2";
import Header from "@/components/frontend/header";
import CustomCarousel from "@/components/frontend/hero-carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Globe, Lightbulb, Wind } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="mt-[6rem]">
				<CustomCarousel />
			</main>
			<AboutSection />
			<section
				id="services"
				className="w-full py-12 md:py-20 lg:py-22 bg-muted"
			>
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg px-3 py-1 text-sm text-primary-foreground  bg-green-700 text-white">
								Our Services
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Comprehensive Energy Solutions
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								We offer a wide range of renewable energy services to meet your
								specific needs and help you achieve your sustainability goals.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
						<div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg">
							<div className="flex flex-col items-center space-y-4">
								<div className="rounded-full bg-primary/10 p-3">
									<Lightbulb className="h-6 w-6 text-green-700" />
								</div>
								<h3 className="text-xl font-bold">Solar Energy</h3>
								<p className="text-center text-muted-foreground">
									Custom solar panel installations for residential, commercial,
									and industrial properties.
								</p>
								<Link
									href="#"
									className="inline-flex items-center text-green-700 text-sm font-medium "
								>
									Learn More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg">
							<div className="flex flex-col items-center space-y-4">
								<div className="rounded-full bg-primary/10 p-3">
									<Wind className="h-6 w-6 text-green-700" />
								</div>
								<h3 className="text-xl font-bold">Wind Energy</h3>
								<p className="text-center text-muted-foreground">
									Wind turbine solutions for areas with suitable wind conditions
									to generate clean electricity.
								</p>
								<Link
									href="#"
									className="inline-flex items-center text-green-700 text-sm font-medium"
								>
									Learn More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg">
							<div className="flex flex-col items-center space-y-4">
								<div className="rounded-full bg-primary/10 p-3">
									<Globe className="h-6 w-6 text-green-700" />
								</div>
								<h3 className="text-xl font-bold">Energy Consulting</h3>
								<p className="text-center text-muted-foreground">
									Expert advice on energy efficiency, sustainability planning,
									and renewable energy integration.
								</p>
								<Link
									href="#"
									className="inline-flex text-green-700 items-center text-sm font-medium"
								>
									Learn More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-20 lg:py-22  bg-background">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg  px-3 py-1 text-sm  bg-green-700 text-white">
								Our Projects
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Featured Success Stories
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Explore some of our most impactful renewable energy projects
								that have helped our clients achieve their sustainability goals.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={300}
								alt="Commercial solar installation"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold">Commercial Solar Array</h3>
								<p className="mt-2 text-muted-foreground">
									A 500kW solar installation for a manufacturing facility,
									reducing their carbon footprint by 40%.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex text-green-700 items-center text-sm font-medium"
								>
									View Case Study
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/free-photo/landscape-with-windmills_15879-608.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={300}
								alt="Community wind farm"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold">Community Wind Farm</h3>
								<p className="mt-2 text-muted-foreground">
									A community-owned wind farm providing clean energy to over
									5,000 homes in rural areas.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex text-green-700 items-center text-sm font-medium "
								>
									View Case Study
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/premium-photo/hand-male-holding-light-bulb-copy-space-energy_43284-1549.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={300}
								alt="Smart energy management system"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold">Smart Energy Management</h3>
								<p className="mt-2 text-muted-foreground">
									Implementation of an AI-driven energy management system for a
									tech campus, reducing energy use by 35%.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex text-green-700 items-center text-sm font-medium"
								>
									View Case Study
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<Button
							asChild
							variant="outline"
							size="lg"
							className="bg-green-700 hover:bg-green-800 text-white hover:text-white"
						>
							<Link href="#">View All Projects</Link>
						</Button>
					</div>
				</div>
			</section>
			<section id="blog" className="w-full py-12 md:py-20 lg:py-22  bg-muted">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg px-3 py-1 text-sm  bg-green-700 text-white">
								Our Blog
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Latest Insights
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Stay updated with the latest news, trends, and insights in the
								renewable energy industry.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/premium-photo/side-view-man-using-mobile-phone_1048944-25231714.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={200}
								alt="Solar panel innovation"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<div className="text-sm text-muted-foreground">
									March 15, 2023
								</div>
								<h3 className="mt-2 text-xl font-bold">
									The Future of Solar Panel Technology
								</h3>
								<p className="mt-2 text-muted-foreground">
									Exploring the latest innovations in solar panel efficiency and
									what it means for renewable energy adoption.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex items-center text-sm font-medium text-green-700"
								>
									Read More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/premium-photo/close-up-hand-holding-christmas-decoration-against-blue-background_1048944-17196200.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={200}
								alt="Energy policy changes"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<div className="text-sm text-muted-foreground">
									February 28, 2023
								</div>
								<h3 className="mt-2 text-xl font-bold">
									Policy Changes Affecting Renewable Energy
								</h3>
								<p className="mt-2 text-muted-foreground">
									An analysis of recent policy changes and how they impact the
									renewable energy landscape.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex items-center text-sm font-medium text-green-700"
								>
									Read More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg">
							<Image
								src="https://img.freepik.com/free-photo/close-up-man-writing-notebook_23-2148894050.jpg?uid=R177297642&ga=GA1.1.1785053804.1733249933&semt=ais_hybrid"
								width={400}
								height={200}
								alt="Business sustainability"
								className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<div className="text-sm text-muted-foreground">
									January 10, 2023
								</div>
								<h3 className="mt-2 text-xl font-bold">
									Business Benefits of Renewable Energy
								</h3>
								<p className="mt-2 text-muted-foreground">
									How businesses are gaining competitive advantages through
									renewable energy investments.
								</p>
								<Link
									href="#"
									className="mt-4 inline-flex items-center text-sm font-medium text-green-700"
								>
									Read More
									<ChevronRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<Button asChild variant="outline" size="lg">
							<Link
								href="#"
								className="bg-green-700 hover:bg-green-800 text-white hover:text-white"
							>
								View All Articles
							</Link>
						</Button>
					</div>
				</div>
			</section>
			<CtaV2 />
			<footer className="w-full border-t bg-background py-6 md:py-12">
				<div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
					<div className="flex items-center gap-2">
						<Link href="/" className="flex items-center">
							<Image
								src="/kamharis-logo.png"
								alt="Company Logo"
								width={612}
								height={254}
								className="h-14 w-auto"
							/>
						</Link>
					</div>
					<div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
						<Link
							href="#"
							className="text-sm hover:underline underline-offset-4"
						>
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="text-sm hover:underline underline-offset-4"
						>
							Terms of Service
						</Link>
						<Link
							href="#"
							className="text-sm hover:underline underline-offset-4"
						>
							Sitemap
						</Link>
					</div>
					<div className="text-center text-sm text-muted-foreground md:text-right">
						&copy; {new Date().getFullYear()} Kamharis Energy. All rights
						reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}
