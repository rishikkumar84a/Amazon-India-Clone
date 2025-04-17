"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, MapPin, User, ChevronDown, Menu } from "lucide-react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex flex-col w-full">
      {/* Main navbar */}
      <div className="amazon-navbar py-2 px-4 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="w-24 h-8 relative flex items-center">
            <span className="text-white font-bold text-2xl">amazon<span className="text-amazon-orange">.in</span></span>
          </div>
        </Link>

        {/* Deliver to */}
        <div className="hidden md:flex items-start text-sm cursor-pointer hover:text-yellow-200 transition-colors">
          <MapPin size={18} className="mr-1" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-300">Deliver to</span>
            <span className="font-bold">Update location</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="amazon-search">
          <div className="flex rounded-md overflow-hidden w-full">
            <select
              className="text-sm px-2 py-2 bg-gray-100 text-gray-700 border-r border-gray-300 outline-none"
              defaultValue="all"
            >
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="computers">Computers</option>
              <option value="smart-home">Smart Home</option>
              <option value="home-kitchen">Home & Kitchen</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="flex-1 px-4 py-2 outline-none text-black"
            />
            <button className="flex items-center justify-center px-4 bg-amazon-light hover:bg-yellow-500 transition-colors">
              <Search className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Account and Lists */}
        <div className="hidden md:flex flex-col items-start text-sm cursor-pointer hover:text-yellow-200 transition-colors">
          <span className="text-xs">Hello, sign in</span>
          <div className="flex items-center font-bold">
            <span>Account & Lists</span>
            <ChevronDown size={14} className="ml-1" />
          </div>
        </div>

        {/* Returns and Orders */}
        <div className="hidden lg:flex flex-col items-start text-sm cursor-pointer hover:text-yellow-200 transition-colors">
          <span className="text-xs">Returns</span>
          <span className="font-bold">& Orders</span>
        </div>

        {/* Theme switcher for toggling themes */}
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>

        {/* Cart */}
        <div className="flex items-center text-sm cursor-pointer hover:text-yellow-200 transition-colors">
          <div className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-amazon-orange text-black rounded-full flex items-center justify-center text-xs font-bold">
              0
            </span>
          </div>
          <span className="hidden md:inline-block font-bold ml-1">Cart</span>
        </div>
      </div>

      {/* Secondary navbar */}
      <div className="amazon-navbar py-1 px-4 text-sm flex items-center gap-4 border-t border-gray-700">
        <button className="flex items-center hover:text-yellow-200 transition-colors gap-1">
          <Menu size={18} />
          <span className="font-bold">All</span>
        </button>

        <nav className="flex gap-4 overflow-x-auto">
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Amazon miniTV
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Sell
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Best Sellers
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Mobiles
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Today's Deals
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Customer Service
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Electronics
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Prime
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            New Releases
          </Link>
          <Link href="/" className="whitespace-nowrap hover:text-yellow-200 transition-colors">
            Home & Kitchen
          </Link>
        </nav>
      </div>
    </header>
  );
}
