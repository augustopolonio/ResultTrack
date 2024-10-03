import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import Rating from "./rating";

interface InputCardProps {
	title: string;
	description: string;
	imageSrc: string;
}

export default function InputCard({
	title,
	description,
	imageSrc,
}: InputCardProps) {
	const defaultTimeInSeconds = 15;
	const [time, setTime] = useState(defaultTimeInSeconds);
	const [isTimerRunning, setIsTimerRunning] = useState(false);
	// const [score, setScore] = useState(0);
	const [rating, setRating] = useState(0);
	const [notes, setNotes] = useState("");
	const [isSaveDisabled, setIsSaveDisabled] = useState(true);

	const startTimer = () => {
		setTime(defaultTimeInSeconds);
		setIsTimerRunning(true);
		const timer = setInterval(() => {
			setTime((time) => {
				if (time === 0) {
					clearInterval(timer);
					return 0;
				}
				return time - 1;
			});
		}, 1000);
	};

	const onSaveNote = () => {
		setIsTimerRunning(false);
		setTime(defaultTimeInSeconds);

		const storedLog = localStorage.getItem("log");
		const logs = storedLog && JSON.parse(storedLog);
		const hour = new Date().getHours();
		const timeOfDay =
			hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";

		const newLog = {
			id: logs ? logs.length + 1 : 1,
			title,
			rating,
			notes,
			timeOfDay,
			createdAt: new Date(),
		};
		const updatedLogs = logs ? [...logs, newLog] : [newLog];

		localStorage.setItem("log", JSON.stringify(updatedLogs));
		console.log(localStorage.getItem("log"));
	};

	return (
		<Drawer>
			<DrawerTrigger>
				<Card>
					<CardHeader className="flex flex-row text-left items-center gap-4">
						<img src={imageSrc} alt="" width={80} className="rounded-md" />
						<div className="flex flex-col gap-3">
							<CardTitle className="text-xl">{title}</CardTitle>
							<CardDescription>{description}</CardDescription>
						</div>
						{/* <Play className="ml-auto" size={30} />{" "} */}
						{/* Add ml-auto to push Play icon to the end */}
					</CardHeader>
				</Card>
			</DrawerTrigger>
			<DrawerContent className="flex flex-col items-center h-[700px]">
				<img src={imageSrc} alt="" width={100} className="rounded-md" />
				<h1 className="text-2xl">{title}</h1>
				{/* <h3 className="text-sm pt-4">{description}</h3> */}
				<DrawerHeader className="flex flex-col items-center">
					{time === 0 ? (
						""
					) : (
						<DrawerTitle className="text-6xl">
							{Math.floor(time / 60)
								.toString()
								.padStart(2, "0")}
							:{(time % 60).toString().padStart(2, "0")}
						</DrawerTitle>
					)}
					<DrawerDescription>
						{time === 0 ? (
							<div className="flex flex-col gap-4 items-center">
								<Rating
									rating={rating}
									setRating={setRating}
									setIsSaveDisabled={setIsSaveDisabled}
								/>
								<Textarea
									placeholder="Notes"
									className="w-80"
									onChange={(e) => setNotes(e.target.value)}
								/>
							</div>
						) : (
							""
						)}
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="pb-16">
					{isTimerRunning ? (
						""
					) : (
						<Button className="w-32 h-14" onClick={startTimer}>
							Start
						</Button>
					)}

					{time > 0 ? (
						""
					) : (
						<div className="flex flex-col gap-4 items-center">
							<DrawerClose asChild>
								<Button
									className="w-32 h-14"
									onClick={onSaveNote}
									disabled={isSaveDisabled}
								>
									Save
								</Button>
							</DrawerClose>
						</div>
					)}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
