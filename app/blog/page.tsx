'use client';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input
} from "@heroui/react";
import "./page.css"
import React from "react";
import BlogCard from "@/app/blog/card/page";

export class SearchIcon extends React.Component<{}> {
    render() {
        return (
            <i className="fa-solid fa-magnifying-glass"></i>
        );
    }
}

export default function Blog() {
    // @ts-ignore
    return (
        <div className="all">
            <Navbar className="navbar">
                <NavbarBrand>
                    <Link href="/">
                        <i className="fa-solid fa-blog">&nbsp;</i>
                        <p className="font-bold text-inherit">Blog</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem isActive>
                        <Link color="foreground" href="#">Features</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Tags
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<SearchIcon/>}
                        type="search"
                    />
                </NavbarContent>
            </Navbar>
            <div className="content">
                <BlogCard id={123}/>
                <BlogCard id={123}/>
                <BlogCard id={123}/>
                <BlogCard id={123}/>
            </div>
        </div>
    );
}
