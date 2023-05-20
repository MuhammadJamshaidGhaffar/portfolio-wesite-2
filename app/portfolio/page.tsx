import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { AspectRatio } from "@/components/ui/aspect-ratio"
import TypedDescription from "./TypedDescription"
import { Button, buttonVariants } from "@/components/ui/button"
import { Link } from "lucide-react"
import MyName from "./myName"
import Footer from "./footer"
import Projects from "./projects"



  


export default function NewApp(){

    return <div>
            <Card className="w-3/4 mx-auto my-20 bg-slate-100 shadow-sm">
  <CardHeader>
    <MyName />
    <CardDescription className="self-center text-md"><TypedDescription /></CardDescription>
  </CardHeader>
  <CardContent className="flex justify-between space-x-10">
    <p className="self-center">Experienced Web Developer with passion for creating attractive and interactive websites meeting customer needs and exceeding expectations. Well-versed in coding. Excels in HTML, CSS, JavaScript and Full Stack development.</p>
    

    <Avatar className="w-56 h-56">
  <AvatarImage src="http://localhost:3000/jamshaid_img.jpeg" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  

    
  </CardContent>
  <CardFooter className="flex justify-center">
  <Button variant="destructive" >Learn More</Button>

  </CardFooter>
</Card>
{/* @ts-expect-error Async Server Component */}
<Projects />
<Footer />

    </div>
}