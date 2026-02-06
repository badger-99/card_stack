'use client'

import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
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

	/* Auto floating loop */
	// useEffect(() => {
	// 	controls.start({
	// 		y: [0, -25, 0],
	// 		transition: {
	// 			duration: 6,
	// 			repeat: Infinity,
	// 			ease: 'easeInOut',
	// 		},
	// 	});
	// }, [controls]);

	return (
		<>
			<motion.div
				ref={containerRef}
				animate={controls}
				className='relative w-full max-w-sm sm:max-w-md md:max-w-lg h-85 sm:h-95 flex justify-center mb-4'
			>
				{testimonials.map((item, index) => (
					<Card key={index} index={index} {...item} />
				))}
			</motion.div>
		</>
	);
}

{
	/* <div className='w-full flex items-center justify-center '></div> */
}