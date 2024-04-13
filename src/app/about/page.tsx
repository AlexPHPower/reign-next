'use client';

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full">
                <Card>
                    <CardContent className="flex flex-col md:flex-row items-center p-4">
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <Image src="/PaypalLogo.png" alt="Paypal Logo"
                                   className="mt-8 mx-auto w-auto h-24"
                                   width={100}
                                   height={24}/>
                        </div>
                        <div>
                            <CardHeader className="text-2xl font-bold text-white text-center md:text-left">
                                Notice Me <span className="text-primary font-extrabold">Senpai</span> (Rick Whalley)
                            </CardHeader>
                            <p className="text-neutral-400 text-center md:text-left ml-6">
                                Customise your dashboard and improve your performance with our reporting tools.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
