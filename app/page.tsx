'use client';
import React, {useRef} from 'react';
import Link from "next/link";


export default function App() {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    const videoRef4 = useRef(null);
    const videoRef5 = useRef(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const title = e.currentTarget.querySelector("div > p") as HTMLVideoElement | null
        const icon = e.currentTarget.querySelector("div > i") as HTMLVideoElement | null
        const video = e.currentTarget.querySelector("video") as HTMLVideoElement | null
        if (title) {
            title.classList.add("home_page_title_hover");
        }
        if (icon) {
            icon.classList.add("home_page_title_icon_hover");
            const parentElement = e.currentTarget.parentElement;
            if (parentElement) {
                icon.style.color = window.getComputedStyle(parentElement).backgroundColor;
            } else {
                icon.style.color = "white";
            }
        }
        if (video) {
            video.playbackRate = 3;
            console.log("playbackRate", video.playbackRate);
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const title = e.currentTarget.querySelector("div > p") as HTMLVideoElement | null
        const icon = e.currentTarget.querySelector("div > i") as HTMLVideoElement | null
        const video = e.currentTarget.querySelector("video") as HTMLVideoElement | null

        if (title) {
            title.classList.remove("home_page_title_hover");
        }
        if (icon) {
            icon.classList.remove("home_page_title_icon_hover");
        }
        if (video) {
            video.playbackRate = 1;
            console.log("playbackRate", video.playbackRate);
        }
    };

    return (
        <div className="container">
            <Link href="https://github.com/ormissia" className="section section_1">
                <div className="video-background-container"
                     ref={videoRef1}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <video className="video-background" autoPlay loop muted>
                        <source src={"background.mov"} type="video/mp4"/>
                    </video>
                    <div className="content">
                        <p className="home_page_title">GitHub</p>
                        <i className="home_page_title_icon fa-brands fa-github"></i>
                    </div>
                </div>
            </Link>
            <Link href="/blog"  className="section section_2">
                <div className="video-background-container"
                     ref={videoRef2}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <video className="video-background" autoPlay loop muted>
                        <source src={"background.mov"} type="video/mp4"/>
                    </video>
                    <div className="content">
                        <p className="home_page_title">Blog</p>
                        <i className="home_page_title_icon fa-solid fa-blog"></i>
                    </div>
                </div>
            </Link>
            <Link href="/"  className="section section_3">
                <div className="video-background-container"
                     ref={videoRef3}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <video className="video-background" autoPlay loop muted>
                        <source src={"background.mov"} type="video/mp4"/>
                    </video>
                    <div className="content">
                        <p className="home_page_title">Hardware</p>
                        <i className="home_page_title_icon fa-solid fa-microchip"></i>
                    </div>
                </div>
            </Link>
            <Link href="/"  className="section section_4">
                <div className="video-background-container"
                     ref={videoRef4}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <video className="video-background" autoPlay loop muted>
                        <source src={"background.mov"} type="video/mp4"/>
                    </video>
                    <div className="content">
                        <p className="home_page_title">Picture</p>
                        <i className="home_page_title_icon fa-solid fa-image"></i>
                    </div>
                </div>
            </Link>
            <Link href="/aeon"  className="section section_5">
                <div className="video-background-container"
                     ref={videoRef5}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}>
                    <video className="video-background" autoPlay loop muted>
                        <source src={"background.mov"} type="video/mp4"/>
                    </video>
                    <div className="content">
                        <p className="home_page_title">Aeon</p>
                        <i className="home_page_title_icon fa-solid fa-globe"></i>
                    </div>
                </div>
            </Link>
        </div>
    );
}
