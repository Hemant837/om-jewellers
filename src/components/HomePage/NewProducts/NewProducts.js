import jewelryProducts from "./ProductsArray";
import Product from "./Product";

const NewProducts = () => {
  return (
    <div className="mx-auto w-5/6 mt-24 text-center">
      <p className="mb-6  uppercase text-orange-400 font-semibold">
        New era inspirations
      </p>
      <h2 className="mb-16 text-5xl font-bold uppercase">
        New Products
      </h2>
      <div className="flex flex-wrap justify-evenly">
        {jewelryProducts.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
      <button className="mt-10 uppercase border-2 border-black px-8 py-3 text-md font-semibold mx-auto">
        See more
      </button>
    </div>
  );
};

export default NewProducts;
