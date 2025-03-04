'use client';
import React from "react";
import BlogCard from "@/app/blog/card/page";

export default function Blog() {
    return (
        <div className="mb-10 container">
            <div className="h-96 bg-[url(https://picsum.photos/800/600?image=1041)] bg-fixed bg-cover bg-center">
            </div>
            <div className="z-10 w-3/4 content-center mx-auto -my-24">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <div className="h-48 bg-[url(https://picsum.photos/800/600?image=1041)] bg-fixed bg-cover bg-center">
            </div>
        </div>
    );
}
