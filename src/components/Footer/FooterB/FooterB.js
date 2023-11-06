import React from "react";
import FooterBItem from "./FooterBItem";
import FooterIcons from "./FooterIcons";

const FooterB = () => {
  return (
    <section className="mx-auto flex max-w-7xl justify-between font-semibold mt-10">
      <div>&copy; omjewellers</div>
      <ul className="flex w-80 justify-between">
        <FooterIcons />
      </ul>
      <ul className="flex w-60 justify-between">
        <FooterBItem text="Terms of use" />
        <FooterBItem text="Privacy Policy" />
      </ul>
    </section>
  );
};

export default FooterB;
