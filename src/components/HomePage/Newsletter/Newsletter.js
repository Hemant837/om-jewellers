const Newsletter = () => {
  return (
    <div className="flex flex-col h-96 bg-orange-200 text-center justify-center items-center mt-20">
      <h4 className="text-lg font-semibold uppercase mb-4 text-orange-900">
        Newsletter
      </h4>
      <h1 className="text-5xl w-[27rem] font-bold text-gray-900 uppercase mb-4">
        Subscribe to our newsletter
      </h1>
      <p className="w-96 font-semibold text-orange-900 ">
        The dream collection is jewelry that emphasizes our individuality and
        excude beauty and style.
      </p>
      <form className="mt-10 shadow-sm">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your e-mail address"
          className="py-3 px-16 text-gray-500 outline-none"
        />
        <button className="px-10 py-3 text-start bg-black hover:bg-gray-800 text-white">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
