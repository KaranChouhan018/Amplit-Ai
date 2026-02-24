import HeroSection from '@/components/home/hero-section';
import CoreCapabilities from '@/components/home/core-capabilities';
import ProductsSection from '@/components/home/products-section';
import KeyFeatures from '@/components/home/key-features';
import CTASection from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreCapabilities />
      <ProductsSection />
      <KeyFeatures />
      <CTASection />
    </>
  );
}
