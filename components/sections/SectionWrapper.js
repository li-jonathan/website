const SectionWrapper = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="relative flex h-screen flex-col px-12 py-24"
    >
      <h1 className="mb-10 text-4xl font-bold text-yellow-400 ">/{title}</h1>
      {children}
    </section>
  );
};

export default SectionWrapper;
