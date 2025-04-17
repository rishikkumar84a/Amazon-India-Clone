"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// Mock data for product sections
const productCategories = [
  {
    id: 1,
    title: "Shop latest smartphones",
    image: "https://ext.same-assets.com/2979455927/2578693504.jpeg",
    link: "/",
  },
  {
    id: 2,
    title: "Makeup products",
    image: "https://ext.same-assets.com/2979455927/365399919.jpeg",
    link: "/",
    ctaText: "See more",
  },
  {
    id: 3,
    title: "New looks for the new season",
    image: "https://ext.same-assets.com/2979455927/3373057437.jpeg",
    link: "/",
    ctaText: "Shop fashion",
  },
  {
    id: 4,
    title: "Do up your home",
    image: "https://ext.same-assets.com/2979455927/982645178.jpeg",
    link: "/",
    ctaText: "See more",
  },
  {
    id: 5,
    title: "Smart gadgets by Amazon",
    image: "https://ext.same-assets.com/2979455927/1515334483.jpeg",
    link: "/",
    ctaText: "Shop now",
  },
  {
    id: 6,
    title: "Value bazaar",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop_Qc_186x116_1._SY116_CB580842616_.jpg",
    link: "/",
    ctaText: "Shop daily essentials",
  },
  {
    id: 7,
    title: "Work from home essentials",
    image: "https://ext.same-assets.com/2979455927/2106742154.jpeg",
    link: "/",
    ctaText: "See more",
  },
  {
    id: 8,
    title: "Revamp your home in style",
    image: "https://ext.same-assets.com/2979455927/3684099240.jpeg",
    link: "/",
    ctaText: "Explore all",
  },
];

// Recommended products
const recommendedProducts = [
  {
    id: 1,
    title: "Apple iPhone 13",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
    price: "₹59,999",
    rating: 4.5,
    discount: "10% off",
  },
  {
    id: 2,
    title: "Samsung Galaxy S21",
    image: "https://m.media-amazon.com/images/I/91DvVCGRrSL._SL1500_.jpg",
    price: "₹49,999",
    rating: 4.3,
    discount: "15% off",
  },
  {
    id: 3,
    title: "OnePlus 10 Pro",
    image: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
    price: "₹54,999",
    rating: 4.4,
    discount: "12% off",
  },
  {
    id: 4,
    title: "Redmi Note 11 Pro",
    image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._SL1500_.jpg",
    price: "₹18,999",
    rating: 4.2,
    discount: "20% off",
  },
];

// Generate dummy data for today's deals
const todaysDeals = Array(6).fill(null).map((_, i) => ({
  id: `deal-${i}`,
  discount: `${40 + i * 5}% off`,
}));

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="w-full h-[300px] relative bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Amazon.in</h1>
          <p className="text-xl">Shop the latest products at the best prices</p>
        </div>
      </div>

      {/* Main Content - Product Categories Grid */}
      <div className="container mx-auto p-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Card key={category.id} className="amazon-product-card shadow-lg">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold mb-4">{category.title}</h2>
                <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-md">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <Link
                    href={category.link}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {category.ctaText || "Shop now"}
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold mb-6">Recommended for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {recommendedProducts.map((product) => (
            <Card key={product.id} className="amazon-product-card hover:shadow-xl">
              <CardContent className="p-4">
                <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-md mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}
                  </div>
                </div>
                <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={`star-${product.id}-${i}`}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.rating})
                  </span>
                </div>
                <p className="text-lg font-bold mt-2">{product.price}</p>
                <button className="amazon-button-green w-full mt-3">
                  Add to Cart
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Today's Deals */}
      <div className="container mx-auto p-4 mt-8 bg-card rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Today's Deals</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {todaysDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-48">
              <div className="bg-background rounded-md p-4">
                <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-md mb-3">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full" />
                  </div>
                </div>
                <div className="bg-red-500 text-white text-center text-xs font-bold px-2 py-1 rounded-sm mb-2">
                  Up to {deal.discount}
                </div>
                <p className="text-xs text-center">Deal of the day</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
