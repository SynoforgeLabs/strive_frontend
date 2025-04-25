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
      {/* pricing page c selector */}
      <Pricingcomponents.PricingCSelector />
      {/* pricing page price gridd */}
      <Pricingcomponents.PricingPricegrid />
      {/* pricing page how do it work */}
      <Pricingcomponents.PricingHdiw />
    </div>
  );
};

export default PricingPage; 