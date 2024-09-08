import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Play } from "lucide-react"

interface InputCardProps {
  title: string
  description: string
  imageSrc: string
}

export default function InputCard( { title, description, imageSrc }: InputCardProps ) {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-4">        
        <img src={imageSrc} alt="" width={80} className="rounded-md" />
        <div className="flex flex-col gap-3">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button className="rounded-full h-10 w-10">
          <Play />
        </Button>
      </CardHeader>
    </Card>
  )
}