import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
	avatar: string;
	name: string;
	role: string;
	company: string;
	quote: string;
	index: number;
}

export function Card({ avatar, name, role, company, quote, index }: Props) {
	return (
		<motion.div
			className='absolute pointer-none:'
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
