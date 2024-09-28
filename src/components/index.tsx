import { ChartLine } from "lucide-react";
import InputCard from "./custom/input_card";
import lavandaImg from "../assets/lavanda.png";
import cravoImg from "../assets/cravo.png";
import limaoImg from "../assets/limao.png";
import eucaliptoImg from "../assets/eucalipto.png";

export default function Home() {
	const data = [
		{
			id: 1,
			title: "Lavanda",
			description:
				"Planta conhecida por suas propriedades tranquilizantes e aroma agradável.",
			imageSrc: lavandaImg.src,
		},
		{
			id: 2,
			title: "Cravo",
			description:
				"Flor decorativa e aromática, também usada como tempero com propriedades medicinais.",
			imageSrc: cravoImg.src,
		},
		{
			id: 3,
			title: "Limão",
			description:
				"Fruta cítrica rica em vitamina C, amplamente utilizada em culinária e bebidas.",
			imageSrc: limaoImg.src,
		},
		{
			id: 4,
			title: "Eucalipto",
			description:
				"Árvore cujas folhas são usadas para fins medicinais e aromaterapia devido ao seu óleo essencial.",
			imageSrc: eucaliptoImg.src,
		},
	];

	return (
		<main className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<ChartLine />
				<h1 className="text-3xl font-semibold">ResultTrack</h1>
			</div>
			<h1 className="text-xl font-semibold">Olá, John Doe!</h1>

			{data.map((d, i) => (
				<InputCard key={d.id} {...d} />
			))}
		</main>
	);
}
