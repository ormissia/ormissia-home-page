'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link'

export default function NotFound() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <div>
            <p className="b_404">404</p>
            <video ref={videoRef}  className="video_404" autoPlay loop muted>
                <source src={"background.mov"} type="video/mp4"/>
            </video>
            <Link href="/" className="link_404">Home</Link>
        </div>
    );
}