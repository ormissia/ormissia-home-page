import {Card, CardHeader, CardBody, Image} from "@heroui/react";

export default ({id}: { id: number; }) => {
    console.log(id);
    return (
        <Card className="my-8">
            <CardBody className="overflow-visible p-0 flex-row">
                <Image
                    isZoomed
                    alt="Card Header"
                    className="object-cover rounded-xl h-full"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                    width={400}/>
                <div className="m-8 w-1/2">
                    <div className="text-2xl font-bold text-center">Hero Card</div>
                    <div className="">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="absolute right-10 bottom-8">
                        2025-01-01 08:00:00
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}