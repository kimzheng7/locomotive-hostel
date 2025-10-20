import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background-primary text-foreground-primary py-8 px-6 relative text-sans">
      
      {/* Left & Right columns */}
      <div className="flex flex-col text-xs md:flex-row justify-between items-start gap-2">
        {/* Left: nav + contact */}
        <div className="flex flex-col gap-2 text-left">
          <div className="flex flex-col gap-2">
            <a href="/" className="hover:underline">Home</a>
            <a href="/contact" className="hover:underline">About Me</a>
            <a href="/booking" className="hover:underline">Booking</a>
            <a href="/hotels" className="hover:underline">All Hotels</a>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <a href="mailto:hostelnights@gmail.com" className="flex items-center gap-2 hover:underline">
              <MailIcon className="w-5 h-5 flex-shrink-0" />
              <span className="leading-none">hostelnights@gmail.com</span>
            </a>
            <a href="tel:+36309547851" className="flex items-center gap-2 hover:underline">
              <PhoneIcon className="w-5 h-5 flex-shrink-0" />
              <span className="leading-none">+36 30 954 7851</span>
            </a>
          </div>
        </div>

        {/* Right: copyright */}
        <div className="text-right text-xs mt-auto">
          © {new Date().getFullYear()} Rent In Hungary. All rights reserved. <br/>
          Site designed by <a href="https://github.com/kimzheng7" className="hover:underline">Kim Zheng</a>.
        </div>
      </div>

      {/* Center logo absolute centered */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Link href="/">
        <img src="/logo-modified.png" alt="Rent In Hungary Logo" className="h-50 w-auto brightness-0 invert" />
      </Link>
      </div>

    </footer>
  );
}
