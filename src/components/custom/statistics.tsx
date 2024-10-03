import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { formatInTimeZone } from "date-fns-tz";

export default function Statistics() {
	const data = JSON.parse(localStorage.getItem("log") || "[]");

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Date</TableHead>
					<TableHead>Smell</TableHead>
					<TableHead>Rating</TableHead>
					<TableHead>Notes</TableHead>
					<TableHead>Time of day</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{data.map((item: any) => (
					<TableRow key={item.id}>
						<TableCell>
							{formatInTimeZone(item.createdAt, "UTC", "dd/MM/yyyy HH:mm:ss")}
						</TableCell>
						<TableCell>{item.title}</TableCell>
						<TableCell className="text-center">{item.rating}</TableCell>
						<TableCell>{item.notes}</TableCell>
						<TableCell>{item.timeOfDay}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
