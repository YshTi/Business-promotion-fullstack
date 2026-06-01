import { useState } from "react";

import PricingTable from "../components/PricingTable/PricingTable";
import Enterprise from "../components/Enterprise/Enterprise";
import ProductEffects from "../components/ProductEffects/ProductEffects";
import FAQ from "../components/FAQ/Faq";
import Promo from "../components/Promo/Promo";
import Footer from "../components/Footer/Footer";
import AuthModal from "../components/AuthModal/AuthModal";

const Pricing = () => {
  const [authMode, setAuthMode] = useState<"signIn" | "signUp" | null>(null);

  return (
    <>
      <PricingTable
        variant="pricingPage"
        eyebrow="PRICING"
        title="Let's get some real work done here."
        subtitle="Product is your perfect solution for working. Get started now for free"
        onOrderClick={() => setAuthMode("signUp")}
      />

      <Enterprise />

      <ProductEffects />

      <FAQ />

      <Promo />

      <Footer />

      {authMode && (
        <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </>
  );
};

export default Pricing;