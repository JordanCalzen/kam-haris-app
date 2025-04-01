"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function AboutSection() {
	return (
		<section
			id="about"
			className="w-full bg-slate-100 py-12 md:py-20 lg:py-22 bg-background"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-green-700 px-3 py-1 text-sm text-white">
							About Us
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Our Mission & Vision
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							At Kamharis Energy, we're committed to accelerating the transition
							to sustainable energy through innovation, expertise, and
							partnership. Our vision is a world powered by clean, renewable
							energy.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-2">
							<li>
								<Card className="p-2 grid gap-1 hover:border-green-700 transition-all duration-300 h-full group">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-5 w-5 text-green-800" />
										<h3 className="text-xl font-bold">Sustainability First</h3>
									</div>
									<p className="text-muted-foreground">
										We prioritize environmental sustainability in every project
										we undertake.
									</p>
								</Card>
							</li>
							<li>
								<Card className="p-2 grid gap-1 hover:border-green-700 transition-all duration-300 h-full group">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-5 w-5 text-green-800" />
										<h3 className="text-xl font-bold">Innovation</h3>
									</div>
									<p className="text-muted-foreground">
										We continuously explore cutting-edge technologies to deliver
										the best renewable energy solutions.
									</p>
								</Card>
							</li>
							<li>
								<Card className="p-2 grid gap-1 hover:border-green-700 transition-all duration-300 h-full group">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-5 w-5 text-green-800" />
										<h3 className="text-xl font-bold">Customer Partnership</h3>
									</div>
									<p className="text-muted-foreground">
										We work closely with our clients to understand their needs
										and deliver tailored solutions.
									</p>
								</Card>
							</li>
						</ul>
					</div>
					<div className="flex justify-center items-center">
						<Image
							src="/Pipe-photo.jpg"
							alt="Kamharis Energy team"
							width={756}
							height={1008}
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full h-full"
							layout="intrinsic"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
