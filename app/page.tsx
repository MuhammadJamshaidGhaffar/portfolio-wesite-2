import Image from 'next/image'
import myImg from "../imgs/my_image.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <div className='bg-black h-screen pt-6'>

    <div className='flex justify-center'>
      <div className='mx-4 order-last self-center '>
                <Avatar className='w-48 h-48'>
          <AvatarImage src={"http://localhost:3000/jamshaid_img.jpeg"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

      </div>
      <div className='mx-4 self-center text-center'>
      <h1 className='text-6xl font-bold text-green-500'>Muhammad Jamshaid Ghaffar</h1>
      <h2 className='text-3xl font-semibold text-green-300'>A Full Stack Web Developer</h2>
      <Button className='my-10' variant="destructive">Learn More</Button>
      </div>
    </div>
    </div>
  )
}
