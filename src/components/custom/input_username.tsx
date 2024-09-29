import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function InputUsername({ setUsername }) {
	const [name, setName] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleContinue = () => {
		if (!name) return;
		setUsername(name);
		window.localStorage.setItem("username", name);
	};

	return (
		<Dialog open>
			<DialogContent>
				<DialogHeader className="flex flex-col gap-2">
					<DialogTitle>Welcome to ResultTrack (alpha v0.0.1)!</DialogTitle>
					<DialogDescription>
						The core idea of ResultTrack is to be a Smell Retraining Therapy
						app, but could be used for anything.
					</DialogDescription>
					<Input
						onChange={handleChange}
						type="text"
						placeholder="Enter your name"
					/>
					<Button onClick={handleContinue}>Continue</Button>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
