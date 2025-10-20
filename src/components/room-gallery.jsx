"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function RoomGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative w-full">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="">
          {images.map((src, i) => (
            <CarouselItem
              key={i}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-5xl p-0 bg-transparent border-none shadow-none">
                  {/* ✅ Hidden title for accessibility */}
                <DialogTitle className="sr-only">Enlarged image {i + 1}</DialogTitle>

                  <div className="relative w-full h-[80vh]">
                    <Image
                      src={selectedImage || src}
                      alt={`Enlarged image ${i + 1}`}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-full shadow-md" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-full shadow-md" />
      </Carousel>
    </div>
  );
}
