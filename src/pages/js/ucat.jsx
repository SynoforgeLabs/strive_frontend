import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Ucatcomponents from "../../components/ucat/ucat-index"

const UcatPage = () => {
  return (
    <div className="ucat-container">
      <Snippets.Navbar />
      
      {/* ucat page hero */}
      <Ucatcomponents.UcatHero />
      {/* ucat page points  */}
      <Ucatcomponents.UcatPoints />
      {/* ucat page pricegrid*/}
      <Ucatcomponents.UcatPricegrid />
      {/* ucat page hdiw*/}
      <Ucatcomponents.UcatHdiw />
    </div>
  );
};

export default UcatPage; 