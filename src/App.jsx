import AnimalList from "./components/exercise6/list";
import data from "../src/components/exercise6/data.json";

function App() {
  const animal = data.map((item, index) => (
    <AnimalList id={index} name={item.name} image={item.url} />
  ));
  return <div>{animal}</div>;
}

export default App;
