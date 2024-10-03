"use client";

import { useState } from "react";

export default function Rating({
	rating,
	setRating,
	setIsSaveDisabled,
}: {
	rating: number;
	setRating: (rating: number) => void;
	setIsSaveDisabled: (isSaveDisabled: boolean) => void;
}) {
	const [hover, setHover] = useState(0);

	const handleSave = (emojiValue: number) => {
		setIsSaveDisabled(false);
		setRating(emojiValue);
	};

	const emojis = ["☹️", "😕", "😐", "🙂", "😄"];
	const emojiDescriptions = [
		"Sad",
		"Unsatisfied",
		"Neutral",
		"Satisfied",
		"Happy",
		"Very Happy",
	];

	return (
		<div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto">
			<h2 className="text-2xl font-semibold text-gray-800">
				Rate your experience
			</h2>
			<div className="flex space-x-2">
				{emojis.map((emoji, index) => {
					const emojiValue = index + 1;
					return (
						// biome-ignore lint/a11y/useButtonType: <explanation>
						<button
							key={emojiValue}
							className={`transition-all duration-200 text-4xl ${
								emojiValue === (hover || rating)
									? "transform scale-125"
									: "opacity-50 hover:opacity-75"
							}`}
							onClick={() => handleSave(emojiValue)}
							onMouseEnter={() => setHover(emojiValue)}
							onMouseLeave={() => setHover(rating)}
							aria-label={`Rate ${emojiDescriptions[index]}`}
						>
							{emoji}
						</button>
					);
				})}
			</div>
			<p className="text-lg font-medium text-gray-700 text-center">
				{rating
					? `You rated your experience as ${emojiDescriptions[rating - 1]}`
					: ""}
			</p>
		</div>
	);
}
