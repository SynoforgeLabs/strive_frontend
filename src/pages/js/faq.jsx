import React from "react"
import * as Snippets from "../../components/snippets/snippets-index"
import * as Faqcomponents from "../../components/faq/faq-index"


const Faqpage = () => {
    return (
      <div className="faq-container">

        <Snippets.Navbar />
        <Faqcomponents.Faqtop />
        <Faqcomponents.Private />
        <Faqcomponents.Bfs />
        <Faqcomponents.Ip />
        <Faqcomponents.Ucat />
        <Snippets.Footer />
      </div>
    );
  };
  
  export default Faqpage;