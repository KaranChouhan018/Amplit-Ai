"use client";
import DentsiHero from "../../components/products/dentsi-hero";
import DentsiCards from "../../components/products/dentsi-cards";
import DentsiTrust from "../../components/products/dentsi-trust";
import DentsiFeatures from "../../components/products/dentsi-features";
import ProductCTA from "@/components/products/product-cta";
import DentsiBenefits from "@/components/products/dentsi-benefits";

export default function DentsiPage() {
  return (
    <>
      <DentsiHero />
      <DentsiTrust />
            <DentsiCards />
      <DentsiBenefits />
      <ProductCTA />
    </>
  );
}
