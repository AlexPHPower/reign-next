'use client';

import React from "react";
import PayoutsCard from "@/components/homepage/payoutsCard";
import ExampleTableCard from "@/components/homepage/exampleTableCard";
import HeroSection from "@/components/homepage/heroSection";
import StatsCard from "@/components/homepage/statsCard";
import DiscordCard from "@/components/homepage/discordCard";
import MonthlyFeeCard from "@/components/homepage/monthlyFeeCard";
import ExampleChartCard from "@/components/homepage/chartCard";


export default function Home() {
    return (
        <main>
            <HeroSection />
            <div className="max-w-4xl mx-auto mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
                    <PayoutsCard />
                    <ExampleTableCard />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-5">
                    <StatsCard />
                    <DiscordCard />
                    <MonthlyFeeCard />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 hidden lg:block">
                    <ExampleChartCard />
                </div>
            </div>
        </main>
    );
}
