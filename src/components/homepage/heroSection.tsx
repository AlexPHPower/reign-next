import React from "react";
import {HeroEmailForm} from "@/components/homepage/heroEmailForm";

export default function HeroSection() {
    return (
        <div className="relative text-center min-h-screen flex justify-center items-center">
            <video className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm" autoPlay loop muted>
                <source src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2020/05/video-backgrounds/kings-canyon/apex-video-background-download-kings-canyon-11.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-background opacity-80 z-10"></div>
            <div className="relative z-10">
                <h2 className="text-5xl font-extrabold tracking-wider text-white">
                    Welcome to <span className="text-primary">Reign.</span>
                </h2>
                <HeroEmailForm />
                <p className="tracking-wider text-white italic">
                    Join a community where passion meets competition, our esports league is the battleground where legends are made.
                </p>
            </div>
        </div>
    );
}