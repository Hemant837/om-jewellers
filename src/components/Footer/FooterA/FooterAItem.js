import React from "react";

const FooterAItem = ({ heading, items }) => {
  return (
    <div>
      <h4 className="text-lg uppercase mb-2 font-semibold">{heading}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-1">
            <a className="hover:underline" href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterAItem;
