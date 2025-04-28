import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as BFriendComponents from "../../components/b-friend/b-friend-index"
import Pricegrid from "../../components/home/home-price-grid"

const BFriendPage = () => {
  return (
    <div className="b-friend-container">
      {/* navbar */}
      <Snippets.Navbar />
      {/* hero */}
      <BFriendComponents.BFriendHero />
      {/* price grid */}
      <BFriendComponents.BfriendPricegrid />
      {/* how it works */}  
      <BFriendComponents.BFriendHDIW />
    </div>
  );
};

export default BFriendPage; 