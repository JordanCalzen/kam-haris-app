// import Header from "@/components/header"

import AboutSection from "@/components/frontend/about-section";
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
									className="inline-flex items-center text-green-700 text-sm font-medium text-primary"
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
									className="inline-flex items-center text-green-700 text-sm font-medium text-primary"
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
									className="inline-flex text-green-700 items-center text-sm font-medium text-primary"
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
									className="mt-4 inline-flex text-green-700 items-center text-sm font-medium text-primary"
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
									className="mt-4 inline-flex text-green-700 items-center text-sm font-medium text-primary"
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
			<section
				id="contact"
				className="w-full py-12 md:py-20 lg:py-22  bg-background"
			>
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-2">
						<div className="inline-block rounded-lg  bg-green-700 text-white px-3 py-1 text-sm text-center">
							Contact Us
						</div>
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Get in Touch
						</h2>
						<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Ready to start your renewable energy journey? Contact us today for
							a free consultation and quote.
						</p>
					</div>
					<div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
						<Button asChild size="lg" className="group">
							<Link href="tel:+1234567890">
								Call Us
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="mailto:info@kamharisenergy.com">Email Us</Link>
						</Button>
					</div>
				</div>
				<div className="container px-4 md:px-6 pt-12">
					<div className="mx-auto max-w-5xl rounded-lg border bg-background p-8 shadow-sm">
						<form className="grid gap-6 md:grid-cols-2">
							<div className="grid gap-3">
								<label
									htmlFor="name"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Name
								</label>
								<input
									id="name"
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Enter your name"
									type="text"
								/>
							</div>
							<div className="grid gap-3">
								<label
									htmlFor="email"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Email
								</label>
								<input
									id="email"
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Enter your email"
									type="email"
								/>
							</div>
							<div className="grid gap-3">
								<label
									htmlFor="phone"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Phone
								</label>
								<input
									id="phone"
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Enter your phone number"
									type="tel"
								/>
							</div>
							<div className="grid gap-3">
								<label
									htmlFor="service"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Service Interested In
								</label>
								<select
									id="service"
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
								>
									<option value="">Select a service</option>
									<option value="solar">Solar Energy</option>
									<option value="wind">Wind Energy</option>
									<option value="consulting">Energy Consulting</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div className="grid gap-3 md:col-span-2">
								<label
									htmlFor="message"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Message
								</label>
								<textarea
									id="message"
									className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Tell us about your project or inquiry"
								></textarea>
							</div>
							<Button type="submit" size="lg" className="md:col-span-2">
								Submit Inquiry
							</Button>
						</form>
					</div>
				</div>
			</section>
			<footer className="w-full border-t bg-background py-6 md:py-12">
				<div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
					<div className="flex items-center gap-2">
						<Wind className="h-6 w-6 text-primary" />
						<span className="text-lg font-bold">Kamharis Energy</span>
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
