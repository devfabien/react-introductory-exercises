export default function UserClick() {
  return (
    <div className="p-5 justify-center flex">
      <button
        className="bg-gray-100 p-1 border rounded-sm"
        onClick={() => alert("Clicked!")}
      >
        Click Me
      </button>
    </div>
  );
}
