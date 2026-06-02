import { useState } from "react";

import AuthModal from "../components/AuthModal/AuthModal";
import Clients from "../components/Clients/Clients";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import HowProductWorks from "../components/HowProductWorks/HowProductWorks";
import Offers from "../components/Offers/Offers";
import Promo from "../components/Promo/Promo";
import Footer from "../components/Footer/Footer";
import QuestionForm from "../components/QuestionForm/QuestionForm";

const Customers = () => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signIn" | "signUp" | null>(null);

  return (
    <>
      <Clients />
      <WhyChoose />
      <HowProductWorks onQuestionClick={() => setIsQuestionOpen(true)} />
      <Offers />
      <Promo onGetThisClick={() => setAuthMode("signUp")} />
      <Footer />

      {isQuestionOpen && (
        <QuestionForm onClose={() => setIsQuestionOpen(false)} />
      )}

      {authMode && (
        <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </>
  );
};

export default Customers;