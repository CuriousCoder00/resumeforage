"use client";
import { Feature } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-screen sm:px-20 px-4">
      <Hero />
      <HowItWorks />
      <Feature />
    </div>
  );
}
