import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Pricingcomponents from "../../components/pricing/pricing-index"

const PricingPage = () => {
  return (
    <div className="pricing-container">
      {/* navbar */}
      <Snippets.Navbar />
      {/* pricing page hero */}
      <Pricingcomponents.PricingHero />
      {/* pricing page price gridd */}
      <Pricingcomponents.PricingPricegrid />
      {/* pricing page how do it work */}
      <Pricingcomponents.PricingHdiw />q
      {/* footer */}
      <Snippets.Footer />
    </div>
  );
};

export default PricingPage; 