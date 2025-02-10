import {Card, CardBody, Image} from "@heroui/react";

export default function BlogCard(){
    return (
        <Card className="my-8 flex w-full">
            <CardBody className="overflow-visible p-0 flex flex-row relative">
                <Image
                    isZoomed
                    alt="Card Header"
                    className="object-cover rounded-xl h-full"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                    width={400}/>
                <div className="m-8 w-1/2 flex flex-col relative">
                    <div className="text-2xl font-bold text-center">Hero Card</div>
                    <div className="">
                        123
                    </div>
                    <div className="absolute bottom-0 overflow-visible p-0 flex flex-row w-full">
                        <div>tag</div>
                        <div className="absolute right-0">2025-01-01 08:00:00</div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}