import {Card, CardHeader, CardBody, Image} from "@heroui/react";

export default ({id}: { id: number; }) => {
    console.log(id);
    return (
        <Card className="my-8">
            <CardBody className="overflow-visible p-0 flex justify-center">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                    width={270}/>
                <div>2345234</div>
            </CardBody>
        </Card>
    );
}