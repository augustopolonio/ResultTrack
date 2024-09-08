import { ChartLine } from "lucide-react"
import InputCard from "./custom/input_card"

export default function Home() {
	const data = [
		{
			title: "Lavanda",
			description: "Planta conhecida por suas propriedades tranquilizantes e aroma agradável.",
			imageSrc: "/lavanda.png"
		},
		{
			title: "Cravo",
			description: "Flor decorativa e aromática, também usada como tempero com propriedades medicinais.",
			imageSrc: "/cravo.png"
		},
		{
			title: "Limão",
			description: "Fruta cítrica rica em vitamina C, amplamente utilizada em culinária e bebidas.",
			imageSrc: "/limao.png"
		},
		{
			title: "Eucalipto",
			description: "Árvore cujas folhas são usadas para fins medicinais e aromaterapia devido ao seu óleo essencial.",
			imageSrc: "/eucalipto.png"
		}
]

  return (
    <main className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<ChartLine />
				<h1 className="text-3xl font-semibold">
					ResultTrack
				</h1>			
			</div>
			<h1 className="text-xl font-semibold">
				Olá, John Doe!
			</h1>

			{data.map((d, i) => <InputCard key={i} {...d} />)}
		</main>
  )
}