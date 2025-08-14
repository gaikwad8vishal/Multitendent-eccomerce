"use client";


import { Button } from "@/components/ui/button";
import { useEffect } from "react"

//https://localhost:3000/admin

export default function Home() {
    useEffect(() => {
        console.log("rendered");
    },[]);


    return (
        <div className="p-4">
            <div className="flex flex-col gap-y-4">
                <div>
                    <Button variant="elevated">
                        I am a button
                    </Button>
                </div>
                
            </div>
        </div>
    )
};