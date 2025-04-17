import React from "react";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
