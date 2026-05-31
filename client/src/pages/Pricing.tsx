import Footer from "../components/Footer/Footer";
import PricingTable from "../components/PricingTable/PricingTable";

const Pricing = () => {
  return (
    <>
      <PricingTable
        variant="pricingPage"
        eyebrow="PRICING"
        title="Let's get some real work done here."
        subtitle="Product is your perfect solution for working. Get started now for free"
      />
      <Footer />
    </>
  );
};

export default Pricing;