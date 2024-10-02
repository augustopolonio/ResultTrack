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
import { Play } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

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
	const [score, setScore] = useState(0);
	const [notes, setNotes] = useState("");

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

		const newLog = {
			id: logs ? logs.length + 1 : 1,
			title,
			score,
			notes,
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
						<Play className="ml-auto" size={30} />{" "}
						{/* Add ml-auto to push Play icon to the end */}
					</CardHeader>
				</Card>
			</DrawerTrigger>
			<DrawerContent className="flex flex-col items-center">
				<img src={imageSrc} alt="" width={100} className="rounded-md" />
				<h1 className="text-2xl">{title}</h1>
				{/* <h3 className="text-sm pt-4">{description}</h3> */}
				<DrawerHeader className="flex flex-col items-center">
					{time === 0 ? (
						<h1 className="text-3xl">Finalizado!</h1>
					) : (
						<DrawerTitle className="text-6xl">
							{Math.floor(time / 60)
								.toString()
								.padStart(2, "0")}
							:{(time % 60).toString().padStart(2, "0")}
						</DrawerTitle>
					)}
					<DrawerDescription>
						{time === 0 ? "De 0 a 5, como foi sua experiência?" : ""}
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="pb-16">
					{isTimerRunning ? (
						""
					) : (
						<Button className="w-32 h-14" onClick={startTimer}>
							Iniciar
						</Button>
					)}

					{time > 0 ? (
						""
					) : (
						<div className="flex flex-col gap-4 items-center">
							<Input
								placeholder="Nota"
								className="w-20 h-12"
								type="number"
								onChange={(e) => setScore(Number(e.target.value))}
								min={0}
								max={5}
							/>
							<Textarea
								placeholder="Observações"
								className="w-80"
								onChange={(e) => setNotes(e.target.value)}
							/>
							<DrawerClose asChild>
								<Button className="w-32 h-14" onClick={onSaveNote}>
									Salvar
								</Button>
							</DrawerClose>
						</div>
					)}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
