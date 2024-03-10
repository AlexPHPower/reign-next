import {Card, CardContent, CardHeader} from "@/components/ui/card";
import React from "react";
import HomeBarChart from "@/components/homepage/barChart";
import dynamic from "next/dynamic";


const HomeBarChartNoSSR = dynamic(() => import('@/components/homepage/barChart'), {
    ssr: false, // Disable server-side rendering for this component
});

export default function ExampleChartCard() {
    return (
        <Card className="col-span-1 shadow-lg shadow-secondary">
            <CardContent className="flex flex-col md:flex-row items-center p-4">
                <div>
                    <CardHeader className="text-2xl font-bold text-white text-center md:text-left">
                        Fully interactive performance <span className="text-primary font-extrabold">charts</span>
                    </CardHeader>
                    <p className="text-neutral-400 text-center md:text-left ml-6">
                        Customise your dashboard and improve your performance with our reporting tools.
                    </p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <HomeBarChartNoSSR />
                </div>
            </CardContent>
        </Card>
    )
}