// import Header from "@/components/header"

import Header from "@/components/frontend/header";
import CustomCarousel from "@/components/frontend/hero-carousel";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="">
				<CustomCarousel />
			</main>
		</div>
	);
}
