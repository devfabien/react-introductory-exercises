export default function List() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  let animalList = animals.map((animal, index) => (
    <li key={index}>{animal}</li>
  ));
  return (
    <div className="p-7">
      <ul className="list-disc">{animalList}</ul>
    </div>
  );
}
