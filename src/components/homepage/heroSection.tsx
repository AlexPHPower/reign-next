import React from "react";

export default function HeroSection() {
    return (
        <div className="snap-start relative text-center min-h-screen flex justify-center items-center">
            <video className="absolute top-0 left-0 w-full h-full object-cover blur-sm z-0" autoPlay loop muted>
                <source src="https://media.contentapi.ea.com/content/dam/apex-legends/videos/2020/05/video-backgrounds/kings-canyon/apex-video-background-download-kings-canyon-11.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div> {/* Overlay */}
            <div className="relative z-20">
                <h2 className="text-5xl font-extrabold tracking-wider text-white">
                    Welcome to <span className="text-primary">Reign.</span>
                </h2>
                <button className="mt-4 px-6 py-2 bg-primary text-white rounded-md shadow-lg">Join Now</button>
            </div>
        </div>
    );
}