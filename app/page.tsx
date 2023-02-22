import {
	SunIcon,
	BoltIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
	const infoColumn = [
		{
			icon: <SunIcon className="h-8 w-8" />,
			title: "Examples",
			desc1: '"Explain Something to me"',
			desc2: '"What is the difference a dog and a cat?"',
			desc3: '"What is the color of the sun?"',
		},
		{
			icon: <BoltIcon className="h-8 w-8" />,
			title: "Capabilities",
			desc1: '"Change the ChatGPT Model to use"',
			desc2: '"Messages are stored in Firebase`s Firestore"',
			desc3: '"Hot Toast notification when ChatGPT is thinking"',
		},
		{
			icon: <ExclamationTriangleIcon className="h-8 w-8" />,
			title: "Limitations",
			desc1: '"May occasionally generate incorrect information"',
			desc2: '"May occasionally produce harmful instructions or biased content"',
			desc3: '"Limited knowledge of world and events after 2021"',
		},
	];

	return (
		<div className="flex flex-col items-center justify-center h-screen px-2 text-white">
			<h1 className="text-5xl font-bold mb-20">
				ChatGPT Messenger Clone
			</h1>
			<div className="flex space-x-2 text-center">
				{infoColumn.map((info) => {
					return (
						<div key={info?.title}>
							<div className="flex flex-col items-center justify-center mb-5">
								{info?.icon}
								<h2>{info?.title}</h2>
							</div>
							<div className="space-y-2">
								<p className="infoText">{info?.desc1}</p>
								<p className="infoText">{info?.desc2}</p>
								<p className="infoText">{info?.desc3}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default HomePage;
