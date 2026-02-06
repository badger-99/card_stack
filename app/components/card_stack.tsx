'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card } from "./card";

export default function CardStack() {
	const controls = useAnimation();
	const containerRef = useRef(null);

	const testimonials = [
		{
			avatar: '/img_33.jpg',
			name: 'Chris Lee',
			role: 'Product Manager',
			company: 'XYZ Tech',
			quote:
				'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
		},
		{
			avatar: '/img_32.jpg',
			name: 'Jessica Ham',
			role: 'CTO',
			company: 'Shuffle',
			quote:
				'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
		},
		{
			avatar: '/img_11.jpg',
			name: 'Fred A. Soersen',
			role: 'Head of Design',
			company: 'Miro',
			quote:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
		},
	];

	const [cards, setCards] = useState(testimonials);

	useEffect(() => {
		const interval = setInterval(() => {
			setCards((prev) => {
				const [first, ...rest] = prev;
				return [...rest, first];
			});
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<motion.div
				ref={containerRef}
				animate={controls}
				layout
				transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				className='relative w-full max-w-sm sm:max-w-md md:max-w-lg h-85 sm:h-95 flex justify-center mb-4'
				>
				{cards.map((item, index) => (
					<Card key={item.avatar} index={index} {...item} />
				))}
			</motion.div>
		</>
	);
}

