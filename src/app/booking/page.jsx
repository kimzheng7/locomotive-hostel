"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { hotels } from "@/lib/hotels";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

/**
 * Booking Page
 *
 * - Reads `hotels` from "@/lib/hotels"
 * - Form: name, guests (+/-), hotel select, room select (dependent)
 * - Check Availability -> reveals availability area (simulated) and scrolls to it
 * - After user selects dates, "Book Now" opens a mailto: prefilled to hostelnights@gmail.com
 */

export default function BookingPage() {
  // form state
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(2);
  const [hotelSlug, setHotelSlug] = useState("");
  const selectedHotel = hotels.find((h) => h.slug === hotelSlug);
  const hotelRooms = selectedHotel?.rooms ?? [];
  const [roomSlug, setRoomSlug] = useState("");
  const selectedRoom = hotelRooms.find((r) => r.slug === roomSlug);

  // availability UI
  const [availabilityShown, setAvailabilityShown] = useState(false);
  const availabilityRef = useRef(null);
  const [disabledDates, setDisabledDates] = useState([]);
  // calendar range selected by user: { from: Date|null, to: Date|null } or null
  const [range, setRange] = useState(null);

  useEffect(() => setRoomSlug(""), [hotelSlug]); // clear room when hotel changes
  useEffect(() => setAvailabilityShown(false), [hotelSlug, roomSlug]); // hide availability when hotel/room changes
  useEffect(() => setDisabledDates([]), [hotelSlug, roomSlug]);
  useEffect(() => setRange(null), [hotelSlug, roomSlug]);

  // ----- Simulated checkAvailability (replace with API) -----
  async function checkAvailability() {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!hotelSlug || !roomSlug) {
      alert("Please select a hotel and room.");
      return;
    }

    // disabled dates set here
    const d = new Date();
    const day = (n) => {
      const x = new Date(d);
      x.setDate(d.getDate() + n);
      x.setHours(0, 0, 0, 0);
      return x;
    };
    setDisabledDates([
      day(2),
      day(3),
      day(10),
      day(11),
      day(12)
    ]);
    setAvailabilityShown(true);

    // scroll to the availability block
    setTimeout(() => {
      availabilityRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  const handleSelectRange = (val) => {
  if (!val || !val?.from || !val?.to) {
    setRange(val);
    return;
  }

  // Clip the range at the first disabled date
  let current = new Date(val.from);
  let clippedTo = val.to;

    const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();


  while (current <= val.to) {
    const isDisabled = disabledDates.some(d => isSameDay(d, current));
    if (isDisabled) {
      clippedTo = new Date(current);
      clippedTo.setDate(clippedTo.getDate() - 1);
      break;
    }
    current.setDate(current.getDate() + 1);
  }

  // If clipping makes end before start, fallback to just from
    setRange({ from: val.from, to: clippedTo });
};

  // create mailto URL prefilled
  function createMailto() {
    if (!selectedHotel || !selectedRoom) {
      alert("Please select a hotel and room.");
      return null;
    }
    if (!range || !range.from || !range.to) {
      alert("Please select check-in and check-out dates.");
      return null;
    }

    const checkIn = range.from.toDateString();
    const checkOut = range.to.toDateString();

    const subject = `Booking Request – ${selectedHotel.name} – ${selectedRoom.name}`;
    const body = [
      `Hello,`,
      ``,
      `My name is ${name || "[Your name]"}. I would like to request a booking:`,
      ``,
      `Hotel: ${selectedHotel.name}`,
      `Room: ${selectedRoom.name}`,
      `Guests: ${guests}`,
      `Check-in: ${checkIn}`,
      `Check-out: ${checkOut}`,
      ``,
      `Please let me know if these dates are available. Thank you!`,
    ].join("\n");

    const mailto = `mailto:hostelnights@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <main className="w-full">
      {/* --- Hero / Splash --- */}
      <AspectRatio ratio={16 / 7.5} className="w-full overflow-hidden relative">
        <img
            src="/booking-banner.jpeg"
            alt="Book a stay"
            className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-15">
            <h1 className="text-7xl font-serif text-white mb-2">
            Book your stay
            </h1>
            <p className="max-w-3xl text-lg text-white/90">
            Book with us today.
            </p>
        </div>
        </AspectRatio>


      {/* --- Booking Form Card --- */}
        <section className="bg-background-secondary">
        <div className=" max-w-4xl mx-auto px-6 py-35">
            <h1 className="text-5xl font-serif tracking-tight text-background-primary text-center mb-10">
                Booking Information and Form
            </h1>
            <p className="text-base text-background-primary max-w-2xl mx-auto text-center mb-20">
                The booking form below requests a booking via email. After sending your request, the reservation must be confirmed by the owner via email within one business day. Payment is then collected on property.
            </p>

          <div className="bg-white rounded-2xl shadow-md border border-foreground-primary/8 p-6 text-background-primary">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Booker name */}
  <label className="flex flex-col">
    <span className="text-sm mb-2">Booker name</span>
    <input
      className="rounded-md border px-3 py-2 bg-background-secondary focus:outline-none focus:ring-2 focus:ring-foreground-primary focus:border-foreground-primary transition"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your full name"
    />
  </label>

  {/* Guests control */}
  <div className="flex flex-col">
    <span className="text-sm mb-2">Guests</span>
    <div className="inline-flex items-center rounded-md border bg-background-secondary px-2 py-1">
      <button
        type="button"
        onClick={() => setGuests((g) => Math.max(1, g - 1))}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-primary/25 cursor-pointer transition"
        aria-label="Decrease guests"
      >
        −
      </button>
      <div className="px-4 text-lg font-medium">{guests}</div>
      <button
        type="button"
        onClick={() => setGuests((g) => g + 1)}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-primary/25 cursor-pointer transition"
        aria-label="Increase guests"
      >
        +
      </button>
    </div>
  </div>

  {/* Hotel select */}
  <label className="flex flex-col">
    <span className="text-sm mb-2">Hotel</span>
    <select
      value={hotelSlug}
      onChange={(e) => setHotelSlug(e.target.value)}
      className="rounded-md border px-3 py-2 bg-background-secondary focus:outline-none focus:ring-2 focus:ring-foreground-primary focus:border-foreground-primary transition"
    >
      <option value="">Select hotel</option>
      {hotels.map((h) => (
        <option key={h.slug} value={h.slug}>
          {h.name}
        </option>
      ))}
    </select>
  </label>

  {/* Room select (dependent) */}
  <label className="flex flex-col">
    <span className="text-sm mb-2">Room</span>
    <select
      value={roomSlug}
      onChange={(e) => setRoomSlug(e.target.value)}
      disabled={!hotelSlug}
      className="rounded-md border px-3 py-2 bg-background-secondary disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-foreground-primary focus:border-foreground-primary transition"
    >
      <option value="">{hotelSlug ? "Select room" : "Select hotel first"}</option>
      {hotelRooms.map((r) => (
        <option key={r.slug} value={r.slug}>
          {r.name}
        </option>
      ))}
    </select>
  </label>
</div>

<div className="mt-10 mb-5 flex items-center justify-center">
  <Button
    onClick={checkAvailability}
    type="button"
    className="text-lg px-8 py-6 bg-background-primary hover:bg-background-primary-hover hover:cursor-pointer transition"
  >
    Check Availability
  </Button>
</div>
          </div>

      {/* --- Availability + Calendar area (shown after check) --- */}        
        <div ref={availabilityRef}>
          {availabilityShown ? (
            <div className="mt-18">
                <div
                    className={"mx-auto w-24 h-0.5 rounded bg-background-primary"}
                    role="separator"
                    aria-hidden="true"
                />
            <h3 className="text-4xl text-background-primary font-serif mt-15 mb-10 text-center">Available dates</h3>
            { /* Availability card */}
            <div className="bg-white text-background-primary rounded-2xl shadow-md border border-foreground-primary/6 p-6">

              {/* simple list of ranges */}
            <div className="flex flex-col gap-3 mb-6">
            <div className="flex rounded-md border px-4 py-3 bg-background-secondary">
                {/* From */}
                <div className="flex-1">
                <div className="text-sm text-background-primary">From</div>
                <div className="font-medium">{range?.from.toDateString() ?? "-"}</div>
                </div>

                {/* To */}
                <div className="flex-1">
                <div className="text-sm text-background-primary">To</div>
                <div className="font-medium">{range?.to.toDateString() ?? "-"}</div>
                </div>
            </div>
            </div>

              {/* Calendar: single range picker */}
              <div className="mb-0">
                <p className="text-sm text-background-primary mb-2">Select check-in and check-out dates</p>

                {/* Calendar: this expects a shadcn Calendar that accepts:
                    - mode="range"
                    - selected (range)
                    - onSelect (setRange)
                    - disabled (list of dates / ranges)
                    If your calendar component uses different prop names, adapt accordingly.
                */}
                <div className="bg-background-secondary p-4 rounded-lg
                    origin-top
                    [&_.rdp-day]:cursor-pointer
                    [&_.rdp-nav_button]:cursor-pointer
                    [&_.rdp-caption_label]:cursor-pointer
                ">
                  <Calendar
                    mode="range"
                    selected={range}
                    onSelect={handleSelectRange}
                    disabled={disabledDates}
                    numberOfMonths={2}
                    className="mx-auto"
                  />
                </div>
              </div>

              {/* Book Now */}
            <div className="flex flex-col items-center mt-8 gap-2">
            <Button
                onClick={createMailto}
                className="text-lg px-8 py-6 mb-1 bg-background-primary hover:bg-background-primary-hover hover:cursor-pointer transition"
            >
                Book Now
            </Button>
            <div className="text-xs text-background-primary/50 text-center mb-6">
                Note: This will open your email client with a prefilled email to <strong>hostelnights@gmail.com</strong>. The host will confirm by email.
            </div>
            </div>

            </div>
            </div>
          ) : ( null )}
        </div>
    </div>
    </section>
    </main>
  );
}
