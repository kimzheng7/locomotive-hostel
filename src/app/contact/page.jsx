import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";


export default function ContactPage() {
  return (
    <section className="bg-background-primary text-foreground-primary">

    <AspectRatio ratio={16 / 7.5} className="w-full overflow-hidden relative">
    {/* Banner image */}
    <img
      src="/hero-contact.jpeg"
      alt="Contact me page banner"
      className="w-full h-full object-cover object-top"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

    {/* Text overlay at the bottom */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4 w-full max-w-5xl">
      <h1 className="text-7xl font-serif tracking-tight text-white mb-2">
        Contact Me
      </h1>
      <div className="text-xl text-white/80 mb-4 font-serif">Get in touch about any inquiries or questions you may have.</div>
    </div>
  </AspectRatio>

      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-center text-5xl font-serif mb-15 tracking-wide mt-35">
          Inquiries and Information
        </h1>
        <p className="mb-15 text-center">
            Get in touch with me to learn more about any of my hotels or rooms, including availability, pricing, and special offers. I’m here to help make your stay in Hungary unforgettable, and I look forward to assisting you with your travel plans.

            Whether you have questions about specific properties, need recommendations for local attractions, or want to discuss group bookings, don’t hesitate to reach out. You can contact me via phone or email, and I’ll respond as quickly as possible to ensure all your needs are met.

            Let’s make your next trip to Hungary a memorable one!
        </p>


{/* Cards container */}
<div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 mb-35">
    {/* Phone Card */}
    <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-center shadow-sm backdrop-blur-sm">
    <h3 className="font-medium text-sm mb-1"><Phone className="w-5 h-5 inline" />  Phone
</h3>
    <a
        href="tel:+36309547851"
        className="text-lg font-semibold hover:underline underline-offset-4"
    >
        +36 30 954 7851
    </a>
    </div>

    {/* Email Card */}
    <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-center shadow-sm backdrop-blur-sm">
    <h3 className="font-medium text-sm mb-1"><Mail className="w-5 h-5 inline" /> Email
</h3>
    <a
        href="mailto:hostelnights@gmail.com"
        className="text-lg font-semibold hover:underline underline-offset-4"
    >
        hostelnights@gmail.com
    </a>
    </div>
</div>
</div>

      {/* About Section */}
      <div className="bg-background-secondary text-background-primary py-35">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
<h1 className="text-5xl font-serif mb-10">About Me</h1>

<div className="flex flex-col md:flex-row items-center md:items-center gap-10">
  {/* Image */}
  <img
    src="/tamas-profile.jpeg"
    alt="Profile Picture"
    className="w-60 h-60 object-cover rounded-xl shadow-xl"
  />

  {/* Text */}
  <div className="leading-relaxed text-background-primary/80 md:text-left text-center">
    Hi, I’m Tamas! 
    <ul className="list-disc list-inside mt-4">
        <li>I've been running these hotels since 2007 here in beautiful Hungary.</li>
        <li>I live in Budapest and work in hospitality, tourism and wine marketing.</li>
        <li>I love traveling around the country, discovering local food and authentic wines from small producers.</li>
        <li>Sharing these experiences with guests is a passion of mine - and I’d be happy to help you discover Hungary too.</li>
    </ul>
  </div>
</div>

          <Link href="/hotels">
            <button className="mt-6 bg-background-primary border border-foreground-primary text-foreground-primary hover:bg-foreground-primary hover:text-background-primary transition px-6 py-3 rounded-lg shadow-sm">
              View My Properties
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
