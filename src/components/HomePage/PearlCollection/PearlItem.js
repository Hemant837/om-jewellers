import React from "react";

const PearlItem = ({ imageUrl, name }) => {
  return (
    <div className="w-80 h-80 relative p-1.5 opacity-95">
      <img className="h-full object-cover" src={imageUrl} alt={name} />
    </div>
  );
};

export default PearlItem;
