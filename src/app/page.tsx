import Navbar from "../components/navbar";
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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
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
            <div className="flex flex-col text-center gap-5">
                <h2 className="text-5xl">
                    Welcome to Reign
                </h2>
                <p>
                    Compete monthly in our esports league. Match against peers, climb the leaderboard, and win rewards. Ready for the challenge?
                </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center w-full gap-12">
                <div className="flex-1 text-center">
                    <h2 className="text-2xl font-bold">Competition for all</h2>
                    <p>
                        Leaderboards are updated automatically after each match. Compete against your friends and other players in the community.
                    </p>
                </div>
                <div className="flex-1 overflow-x-auto">
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
                <div className="flex-1 overflow-x-auto">
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
                <div className="flex-1 text-center">
                    <h2 className="text-2xl font-bold">Competition for all</h2>
                    <p>
                        Leaderboards are updated automatically after each match. Compete against your friends and other players in the community.
                    </p>
                </div>
            </div>
        </main>
    );
}
