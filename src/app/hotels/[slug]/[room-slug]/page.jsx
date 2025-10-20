import { hotels } from "@/lib/hotels";
import { notFound } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { imageFileNames } from "@/lib/image_file_names";
import { RoomGallery } from "@/components/room-gallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Users, BedDouble, Bath, Home, Euro } from "lucide-react";
import Link from "next/link";

export default async function HotelPage({ params }) {
  params = await params;
  const hotel = hotels.find((h) => h.slug === params.slug);
  const room = hotel.rooms.find((r) => r.slug === params["room-slug"]);
  if (!hotel || !room) return notFound();

  const categories = ["bedroom",  "living-room", "exterior", "kitchen", "view", "bathroom"];
  const images = [];

  if (imageFileNames[hotel.slug] && imageFileNames[hotel.slug][room.slug]) {
    // Optionally, add all other images from all categories after the preselected ones
    categories.forEach(cat => {
      if (imageFileNames[hotel.slug][room.slug][cat]) {
        imageFileNames[hotel.slug][room.slug][cat].forEach(img => {
          const imgPath = `/${hotel.slug}/${room.slug}/${cat}/${img}`;
          if (!images.includes(imgPath)) images.push(imgPath);
        });
      }
    });
  }

  return (
    <section>
        <AspectRatio ratio={16 / 9} className="w-full overflow-hidden relative">
        {/* Banner image */}
        <img
          src={`/${hotel.slug}/${room.slug}/room-img.avif`}
          alt={room.name}
          className="w-full h-full object-cover object-top"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Text overlay at the bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4 w-full max-w-5xl">
          <h1 className="text-7xl font-serif tracking-tight text-white mb-2">
            {room.name}
          </h1>
          <div className="text-xl text-white/80 mb-4 font-serif">{room.type}</div>
                  {/* Carousel */}
        {images && images.length > 0 && (
          <div className="w-full max-w-5xl mb-8">
            <RoomGallery images={images} />
          </div>
        )}

        </div>
      </AspectRatio>

<section className="bg-background-primary w-full pt-20 pb-40 text-foreground-primary">
  <div className="max-w-4xl mx-auto px-6 pt-20">
    <h1 className="text-5xl font-serif tracking-tight text-center mb-20">
      About This Room
    </h1>

    <div className="relative border-l border-foreground-primary/20 pl-8 space-y-15 mb-20">

    {/* --- Room Details --- */}
    <div className="relative w-full">
      <h2 className="text-2xl font-serif mb-4">Room Details</h2>

      <div className="grid grid-cols-3 gap-3">
        {/* Cost */}
        <div className="flex items-center gap-2 bg-foreground-primary/5 px-4 py-3 rounded-lg shadow-sm">
          <Euro className="w-5 h-5 text-foreground-primary/80" />
          <span className="font-medium">{room.cost ? `${room.cost}€/night` : "--"}</span>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 bg-foreground-primary/5 px-4 py-3 rounded-lg shadow-sm">
          <Users className="w-5 h-5 text-foreground-primary/80" />
          <span>{room.guests} guest{room.guests > 1 ? "s" : ""}</span>
        </div>

        {/* Bedrooms */}
        <div className="flex items-center gap-2 bg-foreground-primary/5 px-4 py-3 rounded-lg shadow-sm">
          <Home className="w-5 h-5 text-foreground-primary/80" />
          <span>{room.bedrooms} bedroom{room.bedrooms > 1 ? "s" : ""}</span>
        </div>

        {/* Beds */}
        <div className="flex items-center gap-2 bg-foreground-primary/5 px-4 py-3 rounded-lg shadow-sm">
          <BedDouble className="w-5 h-5 text-foreground-primary/80" />
          <span>{room.beds} bed{room.beds > 1 ? "s" : ""}</span>
        </div>

        {/* Bathrooms */}
        <div className="flex items-center gap-2 bg-foreground-primary/5 px-4 py-3 rounded-lg shadow-sm">
          <Bath className="w-5 h-5 text-foreground-primary/80" />
          <span>{room.bathrooms} bathroom{room.bathrooms > 1 ? "s" : ""}</span>
        </div>
      </div>
    </div>

      {/* --- Description --- */}
      <div className="relative">
        <h2 className="text-2xl font-serif mb-3">Description</h2>
        <p className="whitespace-pre-line leading-relaxed">
          {room.description}
        </p>
      </div>

      {/* --- Getting Around --- */}
      <div className="relative">
        <h2 className="text-2xl font-serif mb-3">Getting Around</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>The property is located at: {room.address}
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                room.address
              )}&output=embed`}
              className="rounded-lg mt-2 mb-6"
              title="Google Maps"
            />
          </li>
          {room.getting_around?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
      {/* Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <Link href="/booking">
        <button className="border-white bg-transparent text-white border hover:bg-background-primary-hover transition-colors duration-300 ease-in-out font-semibold rounded-lg px-8 py-3 text-lg shadow-md hover:cursor-pointer">
          Book this Room
        </button>
      </Link>
      <Link href="/hotels">
        <button className="bg-white text-background-primary border border-background-primary hover:bg-background-primary-hover hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-lg px-8 py-3 text-lg shadow-md hover:cursor-pointer">
          Back to Hotels
        </button>
      </Link>
    </div>
  </div>
</section>

{/* Accordion Section */}
<section className="bg-background-secondary w-full py-35">
  <div className="max-w-5xl mx-auto px-4">
    <h1 className="text-5xl font-serif tracking-tight text-center mb-25 text-background-primary">
      Additional Information
    </h1>

    <Accordion type="multiple" className="space-y-4">
      {/* Amenities */}
      <AccordionItem value="amenities">
        <AccordionTrigger>Amenities</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {room.amenities?.map((a, i) => (
              <span key={i} className="bg-background-primary/10 text-background-primary px-2 py-1 rounded text-xs">
                {a}
              </span>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* House Rules */}
      <AccordionItem value="rules">
        <AccordionTrigger>House Rules</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc list-inside mt-2 text-background-primary/80">
            {room.rules?.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Arriving */}
      <AccordionItem value="arriving">
        <AccordionTrigger>Arriving</AccordionTrigger>
        <AccordionContent>
            <ul className="list-disc list-inside mt-2 text-background-primary/80">
            {room.arriving?.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>

        </AccordionContent>
      </AccordionItem>

      {/* Check-in / Check-out */}
      <AccordionItem value="checkin">
        <AccordionTrigger>Check-in & Check-out</AccordionTrigger>
        <AccordionContent>
          <p className="text-background-primary/80">Check-in: {room.checkin}</p>
          <p className="text-background-primary/80">Check-out: {room.checkout}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>
</section>
  );
}
