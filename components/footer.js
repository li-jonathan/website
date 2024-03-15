const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pb-12 pt-24">
      <a
        href="mailto:hello@jonathancli.com"
        rel="noreferrer"
        target="_blank"
        className="underline-dark duration-800 text-lg font-semibold text-neutral-400 underline transition ease-in-out"
      >
        hello@jonathancli.com
      </a>
      <p className="text-xs">Built & Designed by Jonathan Li</p>
    </footer>
  );
};

export default Footer;
