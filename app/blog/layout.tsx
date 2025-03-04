'use client';
import {Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react";
import {usePathname} from "next/navigation";
import React from "react";
import "./page.css"

const linkData = [
    {name:"Blog",path:"/blog"},
    {name:"ReadingNote",path:"/reading-notes"},
]

export default function BlogLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname();

    return (
        <div className="all">
            <Navbar isBordered className="">
                <NavbarBrand>
                    <Link href="/">
                        <i className="fa-solid fa-house">&nbsp;</i>
                        <p className="font-bold text-inherit">Home</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {linkData.map((link) => (
                        <NavbarItem key={link.name}>
                            <Link
                                className={pathName === link.path ? "text-primary-500 font-bold" : "text-default-500"}
                                color="foreground" href={link.path}>
                                {link.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify="end">
                    {/*搜索*/}
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<i className="fa-solid fa-magnifying-glass"></i>}
                        type="search"
                    />
                </NavbarContent>
            </Navbar>
            {children}
        </div>
    );
}