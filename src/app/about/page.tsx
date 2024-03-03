import Navbar from "@/components/navbar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <Navbar />
            <div
                className="mb-32 grid lg:max-w-5xl lg:w-full text-center mt-5">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-center"><Image
                            className="invert self-center w-64 h-auto"
                            src="/ReignText.svg"
                            alt="Next.js Logo"
                            width={280}
                            height={70}
                            priority
                        /></CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Collapsible className="collapsible">
                            <CollapsibleTrigger className="collapsible-trigger">What is Reign?</CollapsibleTrigger>
                            <CollapsibleContent className="collapsible-content">
                                Your battleground for e-sports glory, welcoming all from amateurs to pros in a monthly league showdown.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="collapsible">
                            <CollapsibleTrigger className="collapsible-trigger">Why Pay for Free Play?</CollapsibleTrigger>
                            <CollapsibleContent className="collapsible-content">
                                Play to win big, dive into intense competition, enjoy organized weekly battles, team up or go solo,
                                and get spotted by e-sports scouts—all with stats tracking in a competitive league.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="collapsible">
                            <CollapsibleTrigger className="collapsible-trigger">Matchmaking Magic</CollapsibleTrigger>
                            <CollapsibleContent className="collapsible-content">
                                We connect with your game account, analyzing your play to pair you perfectly.
                                Initial matches are based on your average rank, refining as we gather more of your gameplay data.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="collapsible">
                            <CollapsibleTrigger className="collapsible-trigger">Climbing the Ranks</CollapsibleTrigger>
                            <CollapsibleContent className="collapsible-content">
                                Outperform your league? We&apos;ll elevate you to higher tiers monthly, ensuring you&apos;re
                                always where you&apos;re meant to be.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="collapsible">
                            <CollapsibleTrigger className="collapsible-trigger">Cheater Crackdown</CollapsibleTrigger>
                            <CollapsibleContent className="collapsible-content">
                                Vigilant spectating and player reporting, coupled with video proof, keeps the game fair.
                                Cheaters lose refunds and rewards, no exceptions.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="collapsible">
                            <CollapsibleTrigger className="collapsible-trigger">Practice Makes Perfect</CollapsibleTrigger>
                            <CollapsibleContent className="collapsible-content">
                                Use our platform for scrimmages and practice, within set hours, to sharpen your skills
                                without impacting the broader game ecosystem.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="collapsible">
                            <CollapsibleTrigger className="collapsible-trigger">Game Frequency</CollapsibleTrigger>
                            <CollapsibleContent className="collapsible-content">
                                Engage in epic weekly battles: 6 matches every Saturday or Sunday, featuring 20 teams of 60 players.
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible className="collapsible">
                            <CollapsibleTrigger className="collapsible-trigger">Scoring System</CollapsibleTrigger>
                            <CollapsibleContent className="collapsible-content">
                                Battle for points ALGS style: Top placements earn more, with additional points for each elimination,
                                fueling competitive fire.
                            </CollapsibleContent>
                        </Collapsible>
                    </CardContent>
                </Card>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full">

            </div>
        </main>
    );
}
