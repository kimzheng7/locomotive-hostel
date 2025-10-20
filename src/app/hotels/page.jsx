import { hotels } from "@/lib/hotels";
import { HotelCard } from "@/components/hotel-card";
import { SplashHero } from "@/components/splash-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";


export default function HomePage() {
  return (
    <section className="bg-background-secondary relative w-full">
      <AspectRatio ratio={16 / 7.5} className="w-full overflow-hidden relative">
        {/* Banner image */}
        <img
          src={`/${hotels[0].slug}/hotel-img.avif`}
          alt={hotels[0].name}
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

        {/* Text overlay at the bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4 w-full max-w-5xl mb-20">
        <h1 className="text-7xl font-serif tracking-tight text-white mb-2">
            All Hotels
        </h1>
    </div>

    </AspectRatio>
      {/* Hero Text */}
      <div className="text-center max-w-3xl mx-auto pt-30 px-6">
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-background-primary mb-10">
          Explore our Selection
        </h1>
        <p className="text-base mb-10 text-background-primary/80">
          From cozy city apartments in Budapest, to relaxing lakeside retreats in Lake Balaton, find your perfect home away from home.
        </p>
      </div>

      {/* Hotel Cards */}
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-screen-xl mx-auto pt-15 pb-15">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.slug} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
