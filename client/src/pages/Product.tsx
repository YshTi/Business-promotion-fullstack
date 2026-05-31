import Hero from "../components/Hero/Hero";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import Features from "../components/Features/Features";
import QuickProcess from "../components/QuickProcess/QuickProcess";
import ContentsStrategies from "../components/ContentsStrategies/ContentsStrategies";
import PricingTable from "../components/PricingTable/PricingTable";
import Feedback from "../components/Feedback/Feedback";
import Promo from "../components/Promo/Promo";
import Footer from "../components/Footer/Footer";

export default function Product() {
  return (
    <>
      <Hero />
      {/*<Pricing /> */}
      <ProductDescription />
      <Features />
      <QuickProcess />
      <ContentsStrategies />
      <PricingTable />
      <Feedback />
      <Promo />
      <Footer />
    </>
  );
}