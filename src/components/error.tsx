import AttentionIcon from "./attentionicon";

const Error = () => {
  return (
    <>
      <section className="bg-attention rounded-3xl p-10 flex flex-row items-center mb-7">
        <div className="mr-5">
          <AttentionIcon />
        </div>
        <p className="font-Poppins text-blue text-lg">
          No qoutes were found matching your filters. Check your filters and
          click the "New Qoute" button again.
        </p>
      </section>
    </>
  );
};

export default Error;
