import React from "react";
import FooterAHead from "./FooterAHead";
import FooterAItem from "./FooterAItem";
import { collectionItems, aboutUsItems, guidesItems } from "./FooterArrays";

const FooterA = () => {
  return (
    <section className="flex justify-between  max-w-7xl mx-auto">
      <FooterAHead />
      <FooterAItem heading="Collections" items={collectionItems} />
      <FooterAItem heading="About Us" items={aboutUsItems} />
      <FooterAItem heading="Guides" items={guidesItems} />
    </section>
  );
};

export default FooterA;
