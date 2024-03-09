'use client';

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"

import {Card, CardContent, CardHeader,} from "@/components/ui/card"
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";


function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}


export default function Home() {
    const [youStats, setYouStats] = useState({ gamesPlayed: 0, wins: 0, kills: 0, top5: 0 });

    const lastScrollY = useRef(0);
    const [triggerUpdate, setTriggerUpdate] = useState(false);

    const otherPlayers = [
        { name: "Notice Me Senpai", gamesPlayed: 10, wins: 8, kills: 35, top5: 7 },
        { name: "Biscuit", gamesPlayed: 10, wins: 6, kills: 30, top5: 8 },
        { name: "MansNotHot", gamesPlayed: 10, wins: 4, kills: 20, top5: 1 },
        { name: "Lelouch", gamesPlayed: 10, wins: 4, kills: 45, top5: 4 },
        { name: "Oakley", gamesPlayed: 10, wins: 3, kills: 12, top5: 3 },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 17;

            if (window.scrollY - lastScrollY.current > threshold) {
                setYouStats(prevStats => {
                    const newGamesPlayed = prevStats.gamesPlayed + 1;
                    const newWins = prevStats.wins + 1;
                    const newKills = prevStats.kills + getRandomInt(9);
                    const newTop5 = prevStats.top5 + 1;

                    return {
                        gamesPlayed: Math.min(newGamesPlayed, 10),
                        wins: Math.min(newWins, 10),
                        kills: Math.min(newKills, 50),
                        top5: Math.min(newTop5, 10),
                    };
                });

                lastScrollY.current = window.scrollY;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sortedPlayers = [...otherPlayers, {
        name: "You",
        ...youStats
    }].sort((a, b) => {
        if (a.wins !== b.wins) return b.wins - a.wins;
        if (a.kills !== b.kills) return b.kills - a.kills;
        return b.top5 - a.top5;
    });

    return (
        <main className="min-h-screen p-12">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-extrabold tracking-wider">
                    Welcome to <span className="text-primary">Reign.</span>
                </h2>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="col-span-1 shadow-lg shadow-secondary">
                        <CardHeader className="text-2xl font-bold text-primary text-center md:text-left">
                            Payouts you can trust
                        </CardHeader>
                        <CardContent>
                            <div>
                                <p className="text-neutral-400 text-center md:text-left">
                                    League winnings are paid out within 72 hours of the end of the league via PayPal.
                                </p>
                                <Image src="/PaypalLogo.png" alt="Paypal Logo"
                                       className="mt-8 mx-auto"
                                       width={100}
                                       height={24}/>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-xl shadow-secondary col-span-1 sm:col-span-2 lg:col-span-3">
                        <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] text-primary">Pos.</TableHead>
                                        <TableHead className="text-primary">IGN</TableHead>
                                        <TableHead className="text-primary">Games Played</TableHead>
                                        <TableHead className="text-primary">Wins</TableHead>
                                        <TableHead className="text-primary">Kills</TableHead>
                                        <TableHead className="text-right text-primary">Top 5</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {sortedPlayers.map((player, index) => (
                                        <TableRow key={player.name} className={player.name === 'You' ? 'bg-secondary' : ''}>
                                            <TableCell className="font-medium text-left">{index + 1}.</TableCell>
                                            <TableCell className={player.name === 'You' ? 'text-primary' : ''}>{player.name}</TableCell>
                                            <TableCell>{player.gamesPlayed}</TableCell>
                                            <TableCell>{player.wins}</TableCell>
                                            <TableCell>{player.kills}</TableCell>
                                            <TableCell className="text-right">{player.top5}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
