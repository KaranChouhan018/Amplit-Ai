import HeroSection from '@/components/home/hero-section';
import VideoSection from '@/components/home/video-section';
import HowItWorks from '@/components/home/how-it-works';
import CoreCapabilities from '@/components/home/core-capabilities';
import WhyAmplit from '@/components/home/why-amplit';
import ProductsSection from '@/components/home/products-section';
import KeyFeatures from '@/components/home/key-features';
import FAQSection from '@/components/home/faq-section';
import CTASection from '@/components/home/cta-section';
import BackgroundGradient from '@/components/layout/background-gradient';

export default function Home() {
  return (
    <BackgroundGradient>
      <HeroSection />
      {/* <VideoSection /> */}
      <WhyAmplit />
      <HowItWorks />
      <CoreCapabilities />
      {/* <ProductsSection /> */}
      <KeyFeatures />
      <FAQSection />
      <CTASection />
    </BackgroundGradient>
  );
}
