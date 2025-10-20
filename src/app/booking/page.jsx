"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { hotels } from "@/lib/hotels";
import { RoomGallery } from "@/components/room-gallery";
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
  const [roomSlug, setRoomSlug] = useState("");

  // availability UI
  const [availabilityShown, setAvailabilityShown] = useState(false);
  const availabilityRef = useRef(null);
  const [availableRanges, setAvailableRanges] = useState([]);

  // calendar range selected by user: { from: Date|null, to: Date|null } or null
  const [range, setRange] = useState(null);

  // derived selections
  const hotelsList = hotels ?? [];
  const selectedHotel = useMemo(() => hotelsList.find((h) => h.slug === hotelSlug), [
    hotelSlug,
    hotelsList,
  ]);
  const hotelRooms = selectedHotel?.rooms ?? [];
  const selectedRoom = hotelRooms.find((r) => r.slug === roomSlug);

  useEffect(() => setRoomSlug(""), [hotelSlug]); // clear room when hotel changes

  const decGuests = () => setGuests((g) => Math.max(1, g - 1));
  const incGuests = () => setGuests((g) => g + 1);

  // ----- Disabled dates configuration (future: pull from API) -----
  // Example: single disabled days or ranges. Format is either Date or { from: Date, to: Date }
  // You can easily populate this from the server later.
  const disabledDates = useMemo(() => {
    // demo: two individual blocked days and one blocked range
    const d = new Date();
    const day = (n) => {
      const x = new Date(d);
      x.setDate(d.getDate() + n);
      x.setHours(0, 0, 0, 0);
      return x;
    };

    return [
      day(2),
      day(3),
      { from: day(10), to: day(12) }, // blocked range
    ];
  }, []);

  // helper to determine if a date is disabled (supports single dates and ranges)
  function isDateDisabled(check) {
    if (!check) return false;
    const target = new Date(check);
    target.setHours(0, 0, 0, 0);

    for (const item of disabledDates) {
      if (!item) continue;
      if (item instanceof Date) {
        const d = new Date(item);
        d.setHours(0, 0, 0, 0);
        if (d.getTime() === target.getTime()) return true;
      } else if (item.from && item.to) {
        const from = new Date(item.from);
        const to = new Date(item.to);
        from.setHours(0, 0, 0, 0);
        to.setHours(0, 0, 0, 0);
        if (target.getTime() >= from.getTime() && target.getTime() <= to.getTime())
          return true;
      }
    }
    return false;
  }

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

    // simulate API call latency
    await new Promise((r) => setTimeout(r, 500));

    // demo available ranges (ISO date strings) — replace with actual API results
    const today = new Date();
    const addDays = (n) => {
      const x = new Date(today);
      x.setDate(today.getDate() + n);
      return x.toISOString().slice(0, 10);
    };

    setAvailableRanges([
      { from: addDays(5), to: addDays(9) },
      { from: addDays(15), to: addDays(20) },
    ]);

    setAvailabilityShown(true);

    // scroll to the availability block
    setTimeout(() => {
      availabilityRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

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

    const checkIn = range.from.toISOString().slice(0, 10);
    const checkOut = range.to.toISOString().slice(0, 10);

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
    return mailto;
  }

  // ---- helper for Calendar 'disabled' prop: convert disabledDates into list of Date objects or ranges
  // Many shadcn wrappers accept the same array we already have; but to be safe expose a normalized version.
  const normalizedDisabled = useMemo(() => disabledDates, [disabledDates]);

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

      <section className="bg-background-secondary py-12">
        <div className="max-w-4xl mx-auto px-6 py-25">
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
        onClick={decGuests}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-primary/25 cursor-pointer transition"
        aria-label="Decrease guests"
      >
        −
      </button>
      <div className="px-4 text-lg font-medium">{guests}</div>
      <button
        type="button"
        onClick={incGuests}
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
      {hotelsList.map((h) => (
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
        </div>
      </section>

      {/* --- Availability + Calendar area (shown after check) --- */}
      <section ref={availabilityRef} className="py-12">
        
        <div className="max-w-4xl bg-background-secondary mx-auto px-6">
          {availabilityShown ? (
            <div className="bg-white text-background-primary rounded-2xl shadow-md border border-foreground-primary/6 p-6">
              <h3 className="text-xl font-semibold mb-4">Available dates</h3>

              {/* simple list of ranges */}
              <div className="flex flex-col gap-3 mb-6">
                {availableRanges.length === 0 ? (
                  <div className="text-foreground-primary/80">No availability found.</div>
                ) : (
                  availableRanges.map((r, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-md border px-4 py-3 bg-background-secondary"
                    >
                      <div>
                        <div className="text-sm text-foreground-primary/80">From</div>
                        <div className="font-medium">{r.from}</div>
                      </div>

                      <div>
                        <div className="text-sm text-foreground-primary/80">To</div>
                        <div className="font-medium">{r.to}</div>
                      </div>

                      <div>
                        <button
                          onClick={() => {
                            // pick this demo range into the Calendar selection
                            setRange({ from: new Date(r.from), to: new Date(r.to) });
                          }}
                          className="bg-foreground-primary text-background-primary px-4 py-2 rounded-md"
                        >
                          Select range
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Calendar: single range picker */}
              <div className="mb-4">
                <p className="text-sm text-foreground-primary/80 mb-2">Select check-in and check-out dates</p>

                {/* Calendar: this expects a shadcn Calendar that accepts:
                    - mode="range"
                    - selected (range)
                    - onSelect (setRange)
                    - disabled (list of dates / ranges)
                    If your calendar component uses different prop names, adapt accordingly.
                */}
                <div className="bg-background-secondary p-4 rounded-lg">
                  <Calendar
                    mode="range"
                    selected={range}
                    onSelect={(val) => {
                      // most shadcn Calendar wrappers pass a Range object or null
                      // we accept both: val could be { from: Date, to: Date } or Date[] etc.
                      setRange(val);
                    }}
                    // pass disabled dates (many wrappers accept this shape)
                    disabled={normalizedDisabled}
                    // optional: pass a dayClassName to mark disabled days for cross-out
                    // if your Calendar supports a prop like `dayClassName` or `dayContent`
                    // replace below with implementation specific to your calendar.
                    dayClassName={(date) => {
                      // calendar libs differ: this prop may not exist. If it does, return classes for disabled days.
                      return isDateDisabled(date) ? "aria-disabled" : "";
                    }}
                  />
                </div>

                <div className="mt-4 text-sm text-foreground-primary/70">
                  Disabled dates are shown crossed out.
                </div>
              </div>

              {/* Book Now */}
              <div className="flex justify-center mt-4">
                <a
                  href={createMailto() ?? "#"}
                  onClick={(e) => {
                    if (!createMailto()) e.preventDefault();
                  }}
                  className="px-6 py-3 rounded-md bg-foreground-primary text-background-primary font-semibold"
                >
                  Book Now
                </a>
              </div>

              <div className="text-sm text-foreground-primary/70 mt-4">
                Note: This will open your email client with a prefilled email to{" "}
                <strong>hostelnights@gmail.com</strong>. The host will confirm by email.
              </div>
            </div>
          ) : (
            <div className="text-center text-foreground-primary/70">
              Click <strong>Check Availability</strong> to view available dates.
            </div>
          )}
        </div>
      </section>

      {/* ---- small utility CSS for cross-out disabled dates ---- */}
      <style jsx>{`
        /* Many calendar implementations mark disabled days with aria-disabled="true"
           or a .rdp-day_disabled class. The below targets [aria-disabled="true"] day cells
           and draws a subtle diagonal line. If your Calendar uses different DOM, update the selector.
        */

        /* Common case: day element has aria-disabled attribute */
        [aria-disabled="true"] {
          position: relative;
        }
        [aria-disabled="true"]::after {
          content: "";
          position: absolute;
          left: 6%;
          top: 50%;
          width: 88%;
          height: 1px;
          background: rgba(0, 0, 0, 0.18);
          transform: rotate(-15deg);
          transform-origin: center;
          pointer-events: none;
        }

        /* If your Calendar marks disabled days with a class (e.g. .rdp-day_disabled),
           uncomment/duplicate the rule below and adjust the selector:

        .rdp-day_disabled {
          position: relative;
        }
        .rdp-day_disabled::after {
          content: "";
          position: absolute;
          left: 6%;
          top: 50%;
          width: 88%;
          height: 1px;
          background: rgba(0, 0, 0, 0.18);
          transform: rotate(-15deg);
        }
        */

        /* Slightly dim disabled days */
        [aria-disabled="true"] > * {
          opacity: 0.55;
        }
      `}</style>
    </main>
  );
}
