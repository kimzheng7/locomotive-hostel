import { hotels } from "@/lib/hotels";
import { HotelCard } from "@/components/hotel-card";
import { SplashHero } from "@/components/splash-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


export default function HomePage() {
  return (
    <section className="bg-background-secondary relative w-full">
      <SplashHero />
      {/* Hero Text */}
      <div className="text-center max-w-3xl mx-auto pt-25 px-6">
        <p className="text-base text-foreground-secondary mb-12 uppercase">
          Welcome to Our Hotels
        </p>
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-background-primary">
          Escape to the heart of Europe where <span className="italic">comfort, style</span>, and <span className="italic">history</span> meet.
        </h1>
      </div>

      {/* Hotel Cards */}
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-screen-xl mx-auto pt-15 pb-15">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.slug} hotel={hotel} />
        ))}
      </div>

      <div className="flex justify-center pb-25">
        <Link href="/hotels">
          <button className="bg-background-primary text-foreground-primary hover:bg-background-primary-hover transition-colors duration-300 ease-in-out font-semibold rounded-lg px-8 py-4 text-lg shadow-md hover:cursor-pointer">
            View All Hotels
          </button>
        </Link>
      </div>
    </section>
  );
}
