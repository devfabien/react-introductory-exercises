export default function ButtonComponent({number}) {
  return (
    <button
      className="bg-gray-100 p-1 border rounded-sm"
      onClick={() => alert(`You clicked on Button ${number}!`)}
    >
      Button {number}
    </button>
  );
}
