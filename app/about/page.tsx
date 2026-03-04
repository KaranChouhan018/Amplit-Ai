"use client";

import AboutCTA from "@/components/about/about-cta";
import AboutHero from "@/components/about/about-hero";
import AboutMission from "@/components/about/about-mission";
import AboutValues from "@/components/about/about-values";
import AboutQuote from "@/components/about/about-quote";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutQuote />
      <AboutCTA />
    </>
  );
}
