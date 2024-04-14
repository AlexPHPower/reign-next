'use client';

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import React from "react";

export default function Page() {
    return (
        <main>
            <div className="min-h-screen p-12 flex flex-col items-center justify-center w-full h-full">
                <Card>
                    <CardContent className="flex flex-col md:flex-row items-start justify-center p-4 w-full">
                        <div className="w-full max-w-4xl">
                            <CardHeader className="text-2xl font-bold text-white text-center">
                                Membership and Pricing
                            </CardHeader>
                            <p className="text-neutral-400 text-left ml-6 mb-6">
                                At Reign, we&apos;re dedicated to creating a thrilling and equitable competitive
                                environment.
                                Membership to our league costs just £10 per month, a fee that fuels not only the intense
                                competition but also the winnings you can achieve. Here’s how it works:
                            </p>
                            <CardHeader className="text-2xl font-bold text-white text-center">
                                Why a Subscription Model?
                            </CardHeader>
                            <p className="text-neutral-400 text-left ml-6 mb-6">
                                Your monthly membership fee is pivotal in creating the prize pool for each league. Out
                                of the £10 fee, 30% is retained by Reign to cover hosting, business expenses, and to
                                ensure the smooth operation and growth of our platform. The remaining 70% goes directly
                                into the prize pool.
                            </p>
                            <CardHeader className="text-2xl font-bold text-white text-center">
                                How the Prize Pool Works
                            </CardHeader>
                            <div className="text-neutral-400 text-left ml-6 mb-6">
                                <p>
                                    With approximately 60 players per league, and each contributing to the prize pool,
                                    the
                                    total available for winners each month is significant. Here&apos;s a breakdown of
                                    the
                                    potential winnings based on a single league setup:
                                </p>
                                <br/>
                                <ul className="text-center">
                                    <li>Total monthly fees collected: £600 (from 60 players)</li>
                                    <li>Amount allocated to prize pool: £420 (70% of total fees)</li>
                                    <li>Reign’s operational costs: £180 (30% of total fees)</li>
                                </ul>
                                <br/>
                                <p>
                                    The prize money is distributed in a tiered system down to the 7th place, ensuring
                                    that
                                    multiple teams have the opportunity to win each month. Here is an example of how
                                    winnings might be distributed among the top seven teams:
                                </p>
                                <br/>
                                <ul className="text-center">
                                    <li>1st Place: £136.50 (35% of prize pool)</li>
                                    <li>2nd Place: £97.50 (25% of prize pool)</li>
                                    <li>3rd Place: £70.20 (18% of prize pool)</li>
                                    <li>4th Place: £46.80 (12% of prize pool)</li>
                                    <li>5th Place: £39.00 (10% of prize pool)</li>
                                    <li>6th Place: £30.00 (remaining prize pool)</li>
                                </ul>
                                <br/>
                                <p>
                                    For a first-place team, each member would receive about £49.00. This
                                    model ensures that multiple teams benefit from their strategic play and teamwork
                                    throughout the league.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}