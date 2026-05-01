import Hero from "../components/Hero/Hero";
import ProductDescription from "../components/ProductDescription/ProductDescription";
import Features from "../components/Features/Features";
// import Pricing from "../components/Pricing";
import Footer from "../components/Footer/Footer";

export default function Product() {
  return (
    <>
      <Hero />
      {/*<Pricing /> */}
      <ProductDescription />
      <Features />
      <Footer />
    </>
  );
}