import Button from "../Button";

const Hero = () => {
  return (
    <section id="hero" className="flex h-screen items-center px-12 py-24">
      <div className="max-w-lg">
        <h1 className="mb-4 text-7xl font-bold">Jonathan Li</h1>
        <p className="mb-6 text-justify leading-8">
          I'm a frontend developer passionate about bringing dynamic web
          interfaces to life using modern web technologies.
        </p>
        <Button text="Say Hello!" href="mailto:hello@jonathancli.com" />
      </div>
    </section>
  );
};

export default Hero;
