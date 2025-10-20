"use client";

import Link from "next/link";
import { hotels } from "@/lib/hotels";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b w-full">
    <div className="flex items-center justify-between py-3 w-full max-w-7xl mx-auto">
        {/* Left: Dropdown menu for hotels */}
    <div className="flex-1 flex justify-start text-base">
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <DropdownMenu open={open}>
              <DropdownMenuTrigger asChild>
                <Link href="/hotels">
                    <Button
                        variant="ghost"
                        className="font-medium flex items-center gap-1 hover:cursor-pointer"
                    >
                        Hotels
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {hotels.map((hotel) => (
                  <DropdownMenuItem asChild key={hotel.slug} className="hover:cursor-pointer">
                    <Link href={`/hotels/${hotel.slug}`}>{hotel.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Center: Hotel group name */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            className="text-4xl font-semibold tracking-tight text-background-primary font-serif hover:text-background-primary-hover transition-colors duration-300 ease-in-out"
          >
            Rent in Hungary
          </Link>
        </div>

        {/* Right: Contact & Booking */}
        <div className="flex-1 flex justify-end gap-4 text-base">
          <Link href="/contact">
            <Button variant="ghost" className="hover:cursor-pointer">
                Contact
            </Button>
          </Link>
          <Link href="/booking">
            <Button className="hover:cursor-pointer bg-background-primary text-foreground-primary hover:bg-background-primary-hover transition-colors duration-300 ease-in-out">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
