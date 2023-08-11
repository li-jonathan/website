"use client"
import clsx from "clsx";

const Hero = () => {
  return (
    <section
      id="hero"
      className="px-12 py-36 h-screen flex items-center"
    >
      <div className="max-w-lg">
        <h1 className="text-7xl font-bold mb-4">Jonathan Li</h1>
        <p className="text-justify leading-8 mb-6">I'm a frontend developer passionate about bringing dynamic web interfaces to life using modern web technologies. Specializing in creating seamless transitions from the design board to the user. </p>
        <button className="px-6 py-2 text-emerald-400 border-2 border-emerald-400 rounded-lg font-semibold">
          Say Hello!
        </button>
      </div>
    </section>
  );
};

export default Hero;
