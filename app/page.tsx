import CardStack from "./components/card_stack";

export default function Home() {
  return (
		<div className='flex h-screen items-center justify-center bg-zinc-50 text-black dark:bg-black dark:text-zinc-50 font-sans'>
			<div
				className='h-full w-[30vw] ml-auto flex px-4 justify-center items-end m-4 rounded-2xl'
				style={{
					height: 'calc(100% - 2rem)',
					backgroundImage: 'url("/cosmic_art.jpeg")',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<CardStack />
			</div>
		</div>
	);
}
