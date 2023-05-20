'use client'

import { CardTitle } from "@/components/ui/card";
import { useEffect } from "react"

export default function MyName(){
    useEffect(()=>{
        async function animate(){
        const sr = (await import("scrollreveal")).default({
            reset: true,
            distance: "80px",
            duration: 2000,
            delay: 200,
          });
          sr.reveal("#myName" , {origin:"top"});
        }
        animate();
        })

    return  <CardTitle id="myName" className="self-center text-4xl text-gray-600">Muhammad Jamshaid Ghaffar</CardTitle>
}