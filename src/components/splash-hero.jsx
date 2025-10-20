import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function SplashHero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
        <Image
          src="/hero-budapest.webp"
          alt="Budapest city skyline"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <Card className="border-none bg-transparent max-w-2xl w-full">
          <CardContent className="p-4 md:p-6">
            <h1 className="text-6xl tracking-tight mb-8 font-serif text-foreground-primary">
              Discover Homey Stays in Hungary
            </h1>
            <Link href="/booking" className="font-thin" passHref>
                <Button className="text-xl mt-8 px-10 py-7 bg-background-primary text-foreground-primary hover:bg-background-primary-hover hover:cursor-pointer rounded-lg transition-colors duration-300 ease-in-out">
                    Book Now
                </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}