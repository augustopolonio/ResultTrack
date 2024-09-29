import { Bird, ChartLine } from "lucide-react";
import InputCard from "./custom/input_card";
import { useState } from "react";
import { data } from "@/mocks/items";
import { Button } from "./ui/button";
import InputUsername from "./custom/input_username";

export default function Home() {
	const [username, setUsername] = useState(
		window.localStorage.getItem("username"),
	);

	return (
		<main className="flex flex-col gap-2 p-4">
			<div className="flex items-center gap-2">
				<ChartLine />
				<h1 className="text-3xl font-semibold">ResultTrack</h1>
			</div>

			{username ? (
				<h1 className="text-xl font-semibold">Olá, {username}!</h1>
			) : (
				<InputUsername setUsername={setUsername} />
			)}

			{data.length > 0 ? (
				data.map((d, i) => <InputCard key={d.id} {...d} />)
			) : (
				<div className="h-[700px] flex flex-col items-center justify-center gap-5">
					{/*"Add a lucide react icon to show the user that there is no data"*/}
					<Bird size={120} className="animate-bounce duration-2000" />
					Nothing to track
					<Button>New tack</Button>
				</div>
			)}
		</main>
	);
}
