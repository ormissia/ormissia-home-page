import React from 'react';

export default async function Page({params}: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    return (
        <div className="">
            <div className="h-96 bg-[url(https://picsum.photos/800/600?image=1041)] bg-fixed bg-cover bg-center">
            </div>
            <div className="w-1/2 mx-auto">
                <h1 className="text-4xl font-bold my-10 text-center">Title</h1>
                <div className="mx-8">
                    123
                </div>
                <p className="text-lg my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    );
}
