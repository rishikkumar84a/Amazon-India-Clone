"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    id: "get-to-know",
    title: "Get to Know Us",
    links: [
      { id: "about", text: "About Amazon", href: "/" },
      { id: "careers", text: "Careers", href: "/" },
      { id: "press", text: "Press Releases", href: "/" },
      { id: "science", text: "Amazon Science", href: "/" },
    ],
  },
  {
    id: "connect",
    title: "Connect with Us",
    links: [
      { id: "facebook", text: "Facebook", href: "/" },
      { id: "twitter", text: "Twitter", href: "/" },
      { id: "instagram", text: "Instagram", href: "/" },
    ],
  },
  {
    id: "money",
    title: "Make Money with Us",
    links: [
      { id: "sell", text: "Sell on Amazon", href: "/" },
      { id: "accelerator", text: "Sell under Amazon Accelerator", href: "/" },
      { id: "brand", text: "Protect and Build Your Brand", href: "/" },
      { id: "global", text: "Amazon Global Selling", href: "/" },
      { id: "affiliate", text: "Become an Affiliate", href: "/" },
      { id: "fulfillment", text: "Fulfilment by Amazon", href: "/" },
      { id: "advertise", text: "Advertise Your Products", href: "/" },
      { id: "pay", text: "Amazon Pay on Merchants", href: "/" },
    ],
  },
  {
    id: "help",
    title: "Let Us Help You",
    links: [
      { id: "account", text: "Your Account", href: "/" },
      { id: "returns", text: "Returns Centre", href: "/" },
      { id: "protection", text: "100% Purchase Protection", href: "/" },
      { id: "app", text: "Amazon App Download", href: "/" },
      { id: "help", text: "Help", href: "/" },
    ],
  },
];

const amazonServices = [
  {
    id: "abebooks",
    title: "AbeBooks",
    desc: "Books, art & collectibles",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    desc: "Scalable Cloud Computing Services",
  },
  {
    id: "audible",
    title: "Audible",
    desc: "Download Audio Books",
  },
  {
    id: "imdb",
    title: "IMDb",
    desc: "Movies, TV & Celebrities",
  },
  {
    id: "shopbop",
    title: "Shopbop",
    desc: "Designer Fashion Brands",
  },
  {
    id: "business",
    title: "Amazon Business",
    desc: "Everything For Your Business",
  },
  {
    id: "prime-now",
    title: "Prime Now",
    desc: "2-Hour Delivery on Everyday Items",
  },
  {
    id: "music",
    title: "Amazon Prime Music",
    desc: "100 million songs, ad-free",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-8">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="amazon-navbar w-full py-3 font-semibold hover:bg-[#37475A] transition-colors flex items-center justify-center"
      >
        <span className="flex items-center gap-2">
          <ArrowUp size={16} />
          Back to top
        </span>
      </button>

      {/* Main footer links */}
      <div className="bg-[#232F3E] text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {footerLinks.map((section) => (
            <div key={section.id} className="flex flex-col gap-2">
              <h3 className="font-bold text-lg mb-2">{section.title}</h3>
              {section.links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white hover:underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Logo and Country Selection */}
      <div className="bg-[#232F3E] py-8 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="w-24 h-8 relative flex items-center mb-2">
            <span className="text-white font-bold text-2xl">amazon<span className="text-amazon-orange">.in</span></span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="border border-gray-600 text-sm text-white px-3 py-1 rounded hover:border-white">
              English
            </button>
            <button className="border border-gray-600 text-sm text-white px-3 py-1 rounded hover:border-white">
              India
            </button>
          </div>
        </div>
      </div>

      {/* Amazon Services */}
      <div className="bg-[#131A22] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amazonServices.map((service) => (
              <div key={service.id} className="flex flex-col">
                <Link href="/" className="text-sm font-bold hover:underline">
                  {service.title}
                </Link>
                <span className="text-xs text-gray-400">{service.desc}</span>
              </div>
            ))}
          </div>
          <Separator className="my-6 bg-gray-700" />
          <div className="text-center text-xs text-gray-400">
            <div className="flex justify-center gap-4 mb-2">
              <Link href="/" className="hover:underline">
                Conditions of Use & Sale
              </Link>
              <Link href="/" className="hover:underline">
                Privacy Notice
              </Link>
              <Link href="/" className="hover:underline">
                Interest-Based Ads
              </Link>
            </div>
            <p>© 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
