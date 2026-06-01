import { useState } from "react";

import Hero from "../components/Hero/Hero";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import Features from "../components/Features/Features";
import QuickProcess from "../components/QuickProcess/QuickProcess";
import ContentsStrategies from "../components/ContentsStrategies/ContentsStrategies";
import PricingTable from "../components/PricingTable/PricingTable";
import Feedback from "../components/Feedback/Feedback";
import Promo from "../components/Promo/Promo";
import Footer from "../components/Footer/Footer";
import AuthModal from "../components/AuthModal/AuthModal";

export default function Product() {
  const [authMode, setAuthMode] = useState<"signIn" | "signUp" | null>(null);

  return (
    <>
      <Hero onGetStartedClick={() => setAuthMode("signUp")} />

      <ProductDescription onSignUpClick={() => setAuthMode("signUp")} />

      <Features />

      <QuickProcess />

      <ContentsStrategies />

      <PricingTable onOrderClick={() => setAuthMode("signUp")} />

      <Feedback />

      <Promo />

      <Footer />

      {authMode && (
        <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </>
  );
}