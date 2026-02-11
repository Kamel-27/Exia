import React from "react";
import Hero from "@/components/Hero";
import AdventureCards from "@/components/AdventureCards";
import Mission from "@/components/Mission";

const Page = () => {
  return (
    <div className="relative">
      <main className="flex flex-col items-center">
        <Hero />
        <AdventureCards />
        <Mission />
      </main>
    </div>
  );
};

export default Page;
