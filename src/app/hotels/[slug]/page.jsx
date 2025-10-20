import { hotels } from "@/lib/hotels";
import { notFound } from "next/navigation";
import { RoomItem } from "@/components/room-item";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

export default async function HotelPage({ params }) {
  params = await params;
  const hotel = hotels.find((h) => h.slug === params.slug);
  if (!hotel) return notFound();

  return (
<section className="w-full">
  <AspectRatio ratio={16 / 7.5} className="w-full overflow-hidden relative">
    {/* Banner image */}
    <img
      src={`/${hotel.slug}/hotel-img.avif`}
      alt={hotel.name}
      className="w-full h-full object-cover object-top"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

    {/* Text overlay at the bottom */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4 w-full max-w-5xl">
      <h1 className="text-7xl font-serif tracking-tight text-white mb-2">
        {hotel.name}
      </h1>
      <div className="text-xl text-white/80 mb-4 font-serif">{hotel.location}</div>
    </div>
  </AspectRatio>

  {/* Main content below */}
  <div className="max-w-5xl mx-auto px-4 py-25">
    <h1 className="text-5xl font-serif tracking-tight text-background-primary text-center mb-10">
        {hotel.slogan}
    </h1>

    <p className="text-base text-background-primary max-w-2xl mx-auto text-center mb-10">{hotel.description}</p>

    <div className="flex gap-4 mb-8 justify-center">
      <Link href="/booking">
        <button className="bg-background-primary text-foreground-primary hover:bg-background-primary-hover transition-colors duration-300 ease-in-out font-semibold rounded-lg px-8 py-3 text-lg shadow-md hover:cursor-pointer">
          Book a Room
        </button>
      </Link>
      <Link href="/hotels">
        <button className="bg-foreground-primary text-background-primary border border-background-primary hover:bg-background-primary hover:text-foreground-primary transition-colors duration-300 ease-in-out font-semibold rounded-lg px-8 py-3 text-lg shadow-md hover:cursor-pointer">
          Back to Hotels
        </button>
      </Link>
    </div>
    </div>

    {/* Room List */}
    <section className="bg-background-secondary w-full py-25">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-serif tracking-tight text-background-primary text-center mb-10">
            Rooms
        </h1>
        {hotel.rooms?.map((room) => (
          <div key={room.slug} className="mb-2">
            <RoomItem key={room.slug} room={room} hotel_slug={hotel.slug} />
          </div>
      ))}
      </div>
    </section>

</section>
  );
}
