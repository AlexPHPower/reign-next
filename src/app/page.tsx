import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
} from "@/components/ui/card"


function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}


export default function Home() {
    const placeholderPlayers: string[] = [
        "Notice Me Senpai",
        "Biscuit",
        "MansNotHot",
        "LeLouch",
        "Oakley",
        "Watto"
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-between px-12 py-12">
            <div className="flex flex-col text-center gap-5 pb-12">
                <h2 className="text-5xl font-extrabold tracking-wider">
                    Welcome to <span className="text-primary">Reign.</span>
                </h2>
                <p className="text-neutral-400">
                    Compete monthly in our esports league.<br/>
                    Match against peers, climb the leaderboard, and win rewards. <br/>
                    Ready for the challenge?
                </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center w-full gap-12">
                <div className="basis-1/3 text-wrap">
                    <h2 className="text-2xl font-bold">Competition for all</h2>
                    <br/>
                    <p className="text-neutral-400">
                        Leaderboards are updated automatically after each match. Compete against your friends and other players in the community.
                    </p>
                </div>
                <div className="basis-2/3 overflow-x-auto">
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] text-destructive">Pos.</TableHead>
                                        <TableHead className="text-destructive">IGN</TableHead>
                                        <TableHead className="text-destructive">Games Played</TableHead>
                                        <TableHead className="text-destructive">Wins</TableHead>
                                        <TableHead className="text-destructive">Kills</TableHead>
                                        <TableHead className="text-right text-destructive">Top 5</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {placeholderPlayers.map((player, index) => (
                                        <TableRow key={player}>
                                            <TableCell className="font-medium text-left">{index + 1}.</TableCell>
                                            <TableCell>{player}</TableCell>
                                            <TableCell>{getRandomInt(12)}</TableCell>
                                            <TableCell>{getRandomInt(8)}</TableCell>
                                            <TableCell>{getRandomInt(40)}</TableCell>
                                            <TableCell className="text-right">{getRandomInt(4)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center w-full gap-12 mt-12">
                <div className="basis-2/3 overflow-x-auto">
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] text-destructive">Pos.</TableHead>
                                        <TableHead className="text-destructive">IGN</TableHead>
                                        <TableHead className="text-destructive">Games Played</TableHead>
                                        <TableHead className="text-destructive">Wins</TableHead>
                                        <TableHead className="text-destructive">Kills</TableHead>
                                        <TableHead className="text-right text-destructive">Top 5</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {placeholderPlayers.map((player, index) => (
                                        <TableRow key={player}>
                                            <TableCell className="font-medium text-left">{index + 1}.</TableCell>
                                            <TableCell>{player}</TableCell>
                                            <TableCell>{getRandomInt(12)}</TableCell>
                                            <TableCell>{getRandomInt(8)}</TableCell>
                                            <TableCell>{getRandomInt(40)}</TableCell>
                                            <TableCell className="text-right">{getRandomInt(4)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div className="basis-1/3 text-left">
                    <h2 className="text-2xl font-bold">Competition for all</h2>
                    <br/>
                    <p className="text-neutral-400">
                        Leaderboards are updated automatically after each match. Compete against your friends and other players in the community.
                    </p>
                </div>
            </div>
        </main>
    );
}
