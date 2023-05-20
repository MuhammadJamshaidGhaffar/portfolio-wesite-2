'use client';
import { CardDescription } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

export default function TypedDescription(){
    const descRef = useRef<typeof CardDescription>(null);
    const isTyping = useRef({
        isTyping:false
    });


    useEffect(()=>{
        function type(){
        const typed = new Typed(descRef.current , {
            strings:["Full stack developer"],
            typeSpeed:100,
            backSpeed:100,
            loop:true,
            backDelay:100
        }
        );
    }
    if(!isTyping.current.isTyping){
        type();
        isTyping.current.isTyping = true;
    }
    } , [2]);

    return <span className="self-center text-md text-red-500 font-bold" ref={descRef}>Full Stack web developer</span>
}