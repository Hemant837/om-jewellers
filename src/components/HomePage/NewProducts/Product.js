import React from "react";

const Product = (props) => {
  const { product } = props;
  return (
    <div className="h-120 w-80 flex flex-col justify-between text-start">
      <img
        className="h-4/5 w-full object-cover opacity-90"
        src={product.image}
        alt="Product"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
