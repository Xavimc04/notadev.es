"use client"

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Articles() {
    const [amount, handleAmount] = useState(8);
    
    useEffect(() => {
        const handleResize = () => { 
            const width = window.innerWidth;

            if (width <= 768) {
                handleAmount(2);
            } else if (width <= 1024) {
                handleAmount(4);
            } else {
                handleAmount(8);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize); 

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return <section 
        className="w-[80%] md:w-2/3 xl:w-full p-5"
        style={{
            display: "block", 
            columns: "17rem", 
            gap: "1rem",
        }}
    >
        {
            [...Array(amount)].map(() => {
                return <Card
                    key={ Math.random() * (new Date()).getTime() }
                    className="mb-4"
                >
                    <CardHeader className="flex flex-col items-start gap-3 animate-pulse">
                        <div className="w-full h-3 bg-gray-200 rounded-full"></div>
                        <div className="w-1/3 h-3 bg-gray-200 rounded-full"></div>
                    </CardHeader>
                    
                    <CardBody>
                        <div 
                            className="w-full bg-gray-200 rounded-sm"
                            style={{ height: `${ Math.floor(Math.random() * 100) + 10 }px` }}
                        ></div>
                    </CardBody>
                </Card>
            })
        }

        <div className="bg-gradient-to-t from-white h-2/3 flex items-end justify-center absolute bottom-0 w-full left-0 z-20"></div>
    </section>
}