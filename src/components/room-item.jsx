import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RoomGallery } from "@/components/room-gallery";
import { imageFileNames } from "@/lib/image_file_names";
import Link from "next/link";

export function RoomItem({ room, hotel_slug }) {
	// Preselect first image from each category
	const categories = ["bedroom", "exterior", "kitchen", "living-room", "view", "bathroom"];
	const images = [];

	if (imageFileNames[hotel_slug] && imageFileNames[hotel_slug][room.slug]) {
		categories.forEach(cat => {
			if (imageFileNames[hotel_slug][room.slug][cat] && imageFileNames[hotel_slug][room.slug][cat].length > 0) {
				images.push(`/${hotel_slug}/${room.slug}/${cat}/${imageFileNames[hotel_slug][room.slug][cat][0]}`);
			}
		});
		// Optionally, add all other images from all categories after the preselected ones
		categories.forEach(cat => {
			if (imageFileNames[hotel_slug][room.slug][cat]) {
				imageFileNames[hotel_slug][room.slug][cat].forEach(img => {
					const imgPath = `/${hotel_slug}/${room.slug}/${cat}/${img}`;
					if (!images.includes(imgPath)) images.push(imgPath);
				});
			}
		});
	}

	return (
		<Card className="overflow-hidden rounded-lg border-background-primary/30 border bg-white shadow-sm">
			<CardHeader className="">
				<CardTitle className="font-serif text-3xl text-background-primary">
					<div>{room.name}</div>
					<div className="text-base text-background-primary/60 font-normal flex flex-wrap items-center">
						<span>{room.type}</span>
						<span className="mx-2 w-1 h-1 bg-background-primary/40 rounded-full inline-block align-middle"></span>
						<span>{room.guests} guest{room.guests > 1 ? 's' : ''}</span>
						<span className="mx-2 w-1 h-1 bg-background-primary/40 rounded-full inline-block align-middle"></span>
						<span>{room.beds} bed{room.beds > 1 ? 's' : ''}</span>
						<span className="mx-2 w-1 h-1 bg-background-primary/40 rounded-full inline-block align-middle"></span>
						<span>{room.bedrooms} bedroom{room.bedrooms > 1 ? 's' : ''}</span>
						<span className="mx-2 w-1 h-1 bg-background-primary/40 rounded-full inline-block align-middle"></span>
						<span>{room.bathrooms} bathroom{room.bathrooms > 1 ? 's' : ''}</span>
                    </div>
                    <div className="text-base text-background-primary/60 font-normal">{room.address}</div>
				</CardTitle>
			</CardHeader>
            <div className="px-6 w-full pb-2">
                <RoomGallery images={images} />
            </div>
			<CardContent className="space-y-2">
				<p className="text-sm text-background-primary font-light min-h-[48px]">{room.description_short}</p>
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 space-y-2 sm:space-y-0">
                <Link href={`/hotels/${hotel_slug}/${room.slug}`}>
                    <span className="text-lg font-semibold text-background-primary underline">
                        {room.cost ?? '--'}€/night
                    </span>
                </Link>
                <Link href={`/hotels/${hotel_slug}/${room.slug}`}>
                    <Button className="bg-background-primary text-foreground-primary hover:bg-background-primary/80 rounded-md px-5 py-2 text-sm font-semibold w-full sm:w-auto hover:cursor-pointer">
                        View Room
                    </Button>
                </Link>
                </div>
			</CardContent>
		</Card>
	);
}
