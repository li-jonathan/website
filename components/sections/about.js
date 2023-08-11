"use client";

const About = () => {
  return (
    <section id="about" className="h-screen px-12 py-36">
      <h1 className="mb-10 text-4xl font-bold text-emerald-400">/about</h1>
      <div className="max-w-xl">
        <p className="mb-4 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea
          commodo consequat.
        </p>
        <p className="mb-4 leading-7">
          Currently, I'm an Associate Application Developer at{" "}
          <span className="text-emerald-400">Dev Technology Group</span>,
          responsible for the frontend of a web application that modernizes a
          traditional paper-based document system, emphasizing an enhanced user
          experience.
        </p>
        <p className="mb-4 leading-7">
          Outside of coding, I love learning new recipes, playing any FPS video
          game, going to the gym, and currently I'm training for my first half
          marathon!
        </p>
        <p className="mb-2">
          Here are some technologies I have been working with:
        </p>
        {["React", "Redux", "TypeScript", "GraphQL"].map((tech, index) => (
          <li class="mb-1 flex gap-2">
            <span class="text-lg leading-6 text-emerald-500">‣</span>
            <p className="text-md text-neutral-400">{tech}</p>
          </li>
        ))}
      </div>
    </section>
  );
};

export default About;
