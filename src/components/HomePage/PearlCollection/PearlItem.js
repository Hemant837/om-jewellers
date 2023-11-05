import React from "react";

const PearlItem = ({ imageUrl, name, price }) => {
  return (
    <div className="w-80 h-80 relative p-1.5 opacity-95">
      <img className="h-full" src={imageUrl} alt={name} />
    </div>
  );
};

export default PearlItem;
