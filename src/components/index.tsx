import {
	Bird,
	ChartColumnDecreasingIcon,
	ChartPie,
	HomeIcon,
	List,
} from "lucide-react";
import InputCard from "./custom/input_card";
import { useState } from "react";
import { data } from "@/mocks/items";
import { Button } from "./ui/button";
import InputUsername from "./custom/input_username";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Statistics from "./custom/statistics";
import icon from "@/assets/SmellTherapyIcon.png";

export default function Home() {
	const [username, setUsername] = useState(
		window.localStorage.getItem("username"),
	);
	const hour = new Date().getHours();

	const getGreeting = () => {
		return hour < 12
			? "Good morning"
			: hour < 18
				? "Good afternoon"
				: "Good evening";
	};

	return (
		<>
			<div className="h-5 animated-background bg-gradient-to-r from-pink-500 via-violet-500 to-green-500 animate-gradient-x sticky top-0" />
			<main className="flex flex-col gap-2">
				{/* <div className="sticky top-5 backdrop-blur-lg drop-shadow-md rounded-lg px-4 py-2"> */}
				<div className="sticky top-5 bg-white border-b drop-shadow-md rounded-lg px-4 py-2">
					<div className="flex items-center gap-2">
						<img src={icon.src} alt="" width={30} height={30} />
						<h1 className="text-2xl font-semibold">Smell Retraining Therapy</h1>
					</div>

					{username ? (
						<h1 className="text-xl">
							{getGreeting()}, {username.split(" ")[0]}!
						</h1>
					) : (
						<InputUsername setUsername={setUsername} />
					)}
				</div>

				<div className="flex flex-col px-4 pb-20">
					<Tabs defaultValue="home">
						<TabsContent value="home" className="flex flex-col gap-2">
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
						</TabsContent>
						<TabsContent value="list">
							<Statistics />
						</TabsContent>

						<TabsList className="flex justify-evenly h-15 fixed bottom-0 left-0 w-full">
							<TabsTrigger value="home" className="flex flex-col gap-1">
								<HomeIcon size={20} />
								Home
							</TabsTrigger>
							<TabsTrigger value="list" className="flex flex-col gap-1">
								<List size={20} />
								List
							</TabsTrigger>
							<TabsTrigger value="statistics" className="flex flex-col gap-1">
								<ChartPie size={20} />
								Statistics
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>
			</main>
		</>
	);
}
