'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';


interface Props {
	avatar: string;
	name: string;
	role: string;
	company: string;
	quote: string;
	index: number;
}

function Card({ avatar, name, role, company, quote, index }: Props) {
	return (
		<motion.div
			animate={{
				bottom: index * 115,
				zIndex: 20 - index,
				scale: 1 - index * 0.05,
				rotate: (index % 2 === 0 ? -1 : 1) * index * 1.5,
				opacity: 1 - index * 0.1,
			}}
			className='absolute pointer-events-none:'
			style={{
				bottom: index * 115,
				zIndex: 20 - index,
				scale: 1 - index * 0.05,
				rotate: (index % 2 === 0 ? -1 : 1) * index * 1.5,
				transformOrigin: 'bottom center',
				opacity: 1 - index * 0.1,
			}}
			whileHover={{ scale: 1.03 }}
			transition={{ type: 'spring', stiffness: 200, damping: 20 }}
		>
			<div className='w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-md shadow-xl p-5'>
				{/* Header */}
				<div className='flex items-center gap-3 mb-3'>
					<Image
						src={avatar}
						alt={name}
						width={11}
						height={11}
						className='w-11 h-11 rounded-full object-cover'
					/>

					<div className='leading-tight'>
						<p className='font-semibold text-gray-900 text-sm'>{name}</p>
						<p className='text-xs text-gray-500'>
							{role}
							{company && `, ${company}`}
						</p>
					</div>
				</div>

				{/* Quote */}
				<p className='text-sm text-gray-700 leading-relaxed line-clamp-4'>“{quote}”</p>
			</div>
		</motion.div>
	);
}

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

