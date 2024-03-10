'use client';

import React from "react";
import PayoutsCard from "@/components/homepage/payoutsCard";
import ExampleTableCard from "@/components/homepage/exampleTableCard";
import HeroSection from "@/components/homepage/heroSection";


export default function Home() {
    return (
        <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
            <HeroSection />
            <div className="snap-end pt-16 max-w-4xl mx-auto pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    <PayoutsCard />
                    <ExampleTableCard />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                    <PayoutsCard />
                    <ExampleTableCard />
                </div>
            </div>
        </main>
    );
}
