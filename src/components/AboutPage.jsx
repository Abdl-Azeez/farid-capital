import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import logoSvg from "../assets/logo.svg";
import targetImg from "../assets/portfolio.svg";
import { BookOpenCheck, Leaf, Users, Landmark } from "lucide-react";

const features = [
	{
		icon: <BookOpenCheck size={40} color="white" />,
		title: ["Ethical", "Expertise"],
		desc: "As a trusted provider of Shariah-compliant advisory services, we possess deep expertise in Islamic Finance.",
	},
	{
		icon: <Leaf size={40} color="white" />,
		title: ["Sustainability", "Commitment"],
		desc: "Our integration of ESG principles ensures that every advised project contributes to long-term societal and environmental well-being.",
	},
	{
		icon: <Users size={40} color="white" />,
		title: ["Experienced", "Leadership"],
		desc: "Our management team consists of industry leaders with extensive experience in financial advisory, risk management, and regulatory compliance.",
	},
	{
		icon: <Landmark size={40} color="white" />,
		title: ["Regulatory", "Alignment"],
		desc: "We are fully compliant with SEC Nigeria's guidelines, guaranteeing transparency, accountability, and trust.",
	},
];

const AboutPage = () => (
    <>
    <Header />
	<div className="min-h-screen flex flex-col bg-white pt-24">
		
		{/* Brown Banner */}
		<div
			className="w-full bg-[#8B6A3B] flex items-center justify-center"
			style={{ height: "200px" }}
		>
			<h1 className="text-white text-3xl font-bold">About Us</h1>
		</div>
		{/* Our Story & Logo */}
		<section className="bg-[#f5f7fa] py-12">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-[#184734] mb-4">
						Our Story
					</h2>
					<p className="text-gray-700 text-base font-normal">
						Farid Capital Limited is a pioneering investment advisory firm
						dedicated to providing ethical, Shariah-compliant financial advisory
						services in Nigeria. By integrating Environmental, Social, and
						Governance (ESG) standards, we aim to transform the investment
						landscape, focusing on opportunities that are sustainable, impactful,
						and compliant with global best practices. We address a significant gap
						in the Nigerian market for transparent and ethical investment
						solutions, offering our clients unique access to high-quality,
						risk-mitigated opportunities.
					</p>
				</div>
				<div className="flex justify-center md:justify-end">
					<img
						src={logoSvg}
						alt="Farid Capital Logo"
						className="w-64 h-64 object-contain bg-white rounded shadow"
					/>
				</div>
			</div>
		</section>
		{/* Mission & Image */}
		<section className="bg-white py-12">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="flex justify-center md:justify-start">
					<img
						src={targetImg}
						alt="Mission"
						className="w-80 h-56 object-cover rounded shadow"
					/>
				</div>
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-[#184734] mb-4">
						Our Mission
					</h2>
					<p className="text-gray-700 text-base font-normal">
						Our mission is to foster sustainable economic development by providing
						ethical, Shariah-compliant financial advisory services that empower
						local and international clients to achieve their investment goals. We
						are committed to delivering innovative, transparent, and impactful
						solutions that contribute to the betterment of society.
					</p>
				</div>
			</div>
		</section>
		{/* Why Choose Farid Capital */}
		<section className="relative py-12">
			{/* Geometric SVG background */}
			<div className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-40">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 800 400"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full"
				>
					<polygon points="0,0 800,0 800,400" fill="#f5f7fa" />
					<polygon points="0,0 0,400 800,400" fill="#e6ece7" />
					<polygon points="0,0 800,0 0,400" fill="#e6ece7" />
				</svg>
			</div>
			<div className="relative max-w-6xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 text-left">
					Why Choose{" "}
					<span className="text-[#F4B13D]">Farid Capital?</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{features.map((feature) => (
						<div
							key={feature.title.join(" ")}
							className="flex flex-col items-start text-left"
						>
							<span className="flex items-center justify-center w-20 h-20 rounded-lg bg-[#184734] mb-4">
								{feature.icon}
							</span>
							<h3 className="font-bold mb-2 text-base md:text-lg">
								<span className="text-[#184734]">{feature.title[0]}</span>{" "}
								<span className="text-[#F4B13D]">{feature.title[1]}</span>
							</h3>
							<p className="text-gray-700 text-sm md:text-base leading-relaxed">
								{feature.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
		<Footer />
        </div>
        </>
);

export default AboutPage;
