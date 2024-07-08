const IsLoading = () => {
  return (
    <>
      <section className="bg-back p-24 py-40">
        <div className="mx-auto my-0 w-24 h-24 rounded-percent border-dotted border-8 border-hblue animate-loading mb-10"></div>
        <h5 className="text-center font-Poppins mt-5 text-blue text-4xl">
          Loading ...
        </h5>
      </section>
    </>
  );
};

export default IsLoading;
