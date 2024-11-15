export default function Subtitle({ children, style }) {
  return (
    <p className={`text-black-500 font-head font-medium ${style}`}>
      {children}
    </p>
  );
}
