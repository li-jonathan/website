"use client";
import clsx from "clsx";

const Hero = () => {
  return (
    <section id="hero" className="flex h-screen items-center px-12 py-36">
      <div className="max-w-lg">
        <h1 className="mb-4 text-7xl font-bold">Jonathan Li</h1>
        <p className="mb-6 text-justify leading-8">
          I'm a frontend developer passionate about bringing dynamic web
          interfaces to life using modern web technologies. Specialized in
          modernizing processes for user efficiency.{" "}
        </p>
        <button className="rounded-lg border-2 border-emerald-400 px-6 py-2 font-semibold text-emerald-400">
          Say Hello!
        </button>
      </div>
    </section>
  );
};

export default Hero;
