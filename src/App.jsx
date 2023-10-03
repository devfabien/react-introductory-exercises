import {v4 as uuidv4} from "uuid";
import AnimalList from "./components/exercise6/AnimalList";
import data from "../src/components/exercise6/data.json";

export default function App() {
  const ANIMAL = data.map(item => (
    <AnimalList id={uuidv4()} name={item.name} image={item.url} />
  ));
  return <div>{ANIMAL}</div>;
}


