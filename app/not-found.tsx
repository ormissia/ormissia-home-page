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
            <p className="err_code">404</p>
            <video ref={videoRef} className="err_code_video" autoPlay loop muted>
                <source src={"background.mov"} type="video/mp4"/>
            </video>
            <Link href="/" className="err_page_home_link">Home</Link>
        </div>
    );
}