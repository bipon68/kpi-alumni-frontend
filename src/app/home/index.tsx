import FooterSection from "../shared/footer";
import NavbarMenu from "../shared/navbar";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import UploadSection from "./components/UploadSection";

const HomePage = () => {
  return (
    <section>
      {/* Navbar menu */}
      <NavbarMenu />

      {/* Hero Section */}
      <HeroSection />

      {/* Upload Section */}
      <UploadSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Us Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </section>
  );
};

export default HomePage;
