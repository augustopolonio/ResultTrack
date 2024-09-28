import { ChartLine } from "lucide-react";
import InputCard from "./custom/input_card";
import { useState } from "react";
import { data } from "@/mocks/items";

export default function Home() {
	return (
		<main className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<ChartLine />
				<h1 className="text-3xl font-semibold">ResultTrack</h1>
			</div>
			<h1 className="text-xl font-semibold">Olá, Joh Doe!</h1>

			{data.map((d, i) => (
				<InputCard key={d.id} {...d} />
			))}
		</main>
	);
}
