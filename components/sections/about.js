import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" title="about">
      <div className="max-w-xl">
        <p className="mb-4 leading-7">
          Hi, my name is Jonathan. I'm a frontend developer based in Chicago,
          IL.
        </p>
        <p className="mb-4 leading-7">
          Currently, I'm an Frontend Application Developer at{" "}
          <span className="text-yellow-400">Dev Technology Group</span>. My
          responsibilities include building new features and maintenance of a
          web application designed to modernize a previously paper-based
          document system, emphasizing an enhanced user experience and more
          efficient workflow.
        </p>
        <p className="mb-2">
          Here are some technologies I have been working with:
        </p>
        <div className="grid grid-flow-col grid-rows-3 gap-2">
          {["React", "Redux (RTK)", "TypeScript", "GraphQL", "NextJS"].map(
            (tech, index) => (
              <div key={`tech-${index}`} className="flex gap-2">
                <span class="text-lg leading-6 text-yellow-500">‣</span>
                <p className="text-md text-neutral-400">{tech}</p>
              </div>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
