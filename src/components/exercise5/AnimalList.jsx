import {v4 as uuidv4} from "uuid";
export default function AnimalList() {
  const ANIMALS = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const ANIMAL_LIST = ANIMALS.map(animal => (
    <li key={uuidv4()}>{animal}</li>
  ));
  return (
    <div className="p-7">
      <ul className="list-disc">{ANIMAL_LIST}</ul>
    </div>
  );
}
