import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function InputUsername({
	setUsername,
}: { setUsername: (username: string) => void }) {
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
						The core idea of ResultTrack is to be a <br /> Smell Retraining
						Therapy app. <br /> In this version there's is a template for you to
						start.
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
