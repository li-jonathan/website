const Button = ({ text, href }) => {
  return (
    <button className="w-38 group relative h-10 w-36 overflow-hidden rounded-lg border-2 border-yellow-400 text-lg shadow">
      <div className="absolute inset-0 w-0 bg-yellow-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <a
        href={href}
        className="relative font-semibold text-yellow-400 group-hover:text-slate-900"
      >
        {text}
      </a>
    </button>
  );
};

export default Button;
