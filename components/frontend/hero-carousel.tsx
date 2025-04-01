"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const carouselItems = [
	{
		image: "/2086872776-erected-scalfold-lower-part-of-ofon-p2-jacket-leg.jpg",
		title: "Engineering Excellence for the Oil & Gas Sector",
		subtitle:
			"Delivering top-tier Engineering, Procurement, and Fabrication solutions across Sub-Saharan Africa.",
	},
	{
		image: "/1913260352-img_2690-scaled.jpg",
		title: "Building a Sustainable Energy Future",
		subtitle:
			"Specializing in Piping, Structural Construction, and Corrosion Protection for the oil and gas industry",
	},
	{
		image: "/1738735083-installation-of-contraflex-blanket-on-ofp2-contro.jpg",
		title: "Innovation in Energy & Infrastructure,",
		subtitle:
			"Providing expert solutions in Engineering, Procurement, and Construction with a focus on safety and efficiency.",
	},
];

export default function CustomCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + carouselItems.length) % carouselItems.length
		);
	};

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative w-full h-[70vh] bg-purple-900  overflow-hidden">
			<div className="absolute inset-0">
				{carouselItems.map((item, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-1000 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						<img
							src={item.image}
							alt={`Slide ${index + 1}`}
							className="object-cover w-full h-full"
						/>
						<div className="absolute inset-0 bg-purple-900/50" />
					</div>
				))}
			</div>
			<div className="absolute inset-x-0 top-[50%] -translate-y-1/2 flex flex-col items-center justify-end p-6 text-white">
				<h2 className="text-3xl max-w-96 text-center font-bold mb-2">
					{carouselItems[currentSlide].title}
				</h2>
				<p className="text-xl mb-8 max-w-96 text-center">
					{carouselItems[currentSlide].subtitle}
				</p>
				<Button className="bg-green-700 hover:bg-green-800 text-white mb-6">
					Get Started
				</Button>
				<div className="flex space-x-2 mb-4">
					{carouselItems.map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full transition-all ${
								index === currentSlide ? "bg-white w-4" : "bg-white/50"
							}`}
							onClick={() => setCurrentSlide(index)}
						/>
					))}
				</div>
			</div>

			<button
				onClick={prevSlide}
				className="absolute -left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors "
				aria-label="Previous slide"
			>
				<ChevronLeft className="w-8 h-8" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute -right-2 sm:right-4  top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
				aria-label="Next slide"
			>
				<ChevronRight className="w-8 h-8" />
			</button>
		</div>
	);
}
