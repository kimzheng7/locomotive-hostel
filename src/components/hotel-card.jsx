import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export function HotelCard({ hotel }) {
  return (
    <Card className="overflow-hidden">
      <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden mx-5">
        <img
          src={`/${hotel.slug}/hotel-img.avif`}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <CardHeader className="">
        <CardTitle className="font-serif text-3xl text-background-primary">{hotel.name}</CardTitle>
        <div className="font-serif text-base text-background-primary/60 -mt-2">{hotel.location}</div>
      </CardHeader>
      <CardContent className="-mt-2">
        <p className="text-sm text-background-primary mb-2 min-h-[18vh]">{hotel.description_short}</p>
        <div className="flex justify-center">
          <Button className="text-background-primary hover:text-foreground-primary bg-foreground-primary hover:bg-background-primary border border-background-primary hover:cursor-pointer">
            <Link href={`/hotels/${hotel.slug}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}