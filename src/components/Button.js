export default function Button(props) {
  const { text, color, hovercolor } = props;

  return (
    <>
      <button
        className={`${color} text-white hover:${hovercolor} py-2 px-8 rounded-md font-semibold`}
      >
        {text}
      </button>
    </>
  );
}
