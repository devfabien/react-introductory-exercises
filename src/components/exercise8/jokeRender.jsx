import Joke from "./Joke";
import jokes from "./jokes.json";

export default function JokeRender() {
  const JOKE = jokes.map((joke) => (
    <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
  ));
  return <div className="flex bg-green-200 gap-10 m-7 p-5">{JOKE}</div>;
}
