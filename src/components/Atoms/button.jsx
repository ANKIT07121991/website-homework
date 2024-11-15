export default function MainButton({ children, primary, style }) {
  return (
    <button
      className={`${
        primary
          ? "border bg-black-500 text-white hover:bg-black-500"
          : "border bg-black-500 text-white hover:bg-black-500"
      } p-5 rounded-lg py-2 text-sm  lg:text-lg uppercase font-body font-bold md:px-[34px] md:py-5 lg:w-full ${style}`}
    >
      {children}
    </button>
  );
}

export function Button({ children, style, buttonStyle }) {
  return (
    <button
      className={`${
        buttonStyle
          ? buttonStyle
          : "bg-transparent text-black-500 hover:bg-black-100 hover:text-white"
      } w-fit h-fit border border-black-100 py-3.5 px-6 font-body font-medium transition-all duration-200 ease-in ${style}`}
    >
      {children}
    </button>
  );
}
