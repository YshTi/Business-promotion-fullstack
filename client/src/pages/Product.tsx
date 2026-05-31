import Hero from "../components/Hero/Hero";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import Features from "../components/Features/Features";
import QuickProcess from "../components/QuickProcess/QuickProcess";
import ContentsStrategies from "../components/ContentsStrategies/ContentsStrategies";
// import Pricing from "../components/Pricing";
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
      <Footer />
    </>
  );
}