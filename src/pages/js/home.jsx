import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Homecomponents from "../../components/home/home-index"


const HomePage = () => {
    return (
      <div className="home-container">
        {/* navbar */}
        <Snippets.Navbar />
        {/* hero */}
        <Homecomponents.Hero />
        {/* stats */}
        <Snippets.Sitestat />
        {/* services */}
        <Homecomponents.Services />
        {/* reviews */}
        <Homecomponents.Reviews />
        {/* home price grid */}
        <Homecomponents.PriceGrid />
        {/* footer */}
        <Snippets.Footer />
      </div>
    );
  };
  
  export default HomePage;