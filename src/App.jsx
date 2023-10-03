import ButtonComponent from "./components/exercise3/ButtonComponent";

export default function App() {
  return (
    <div className=" p-5 flex justify-center gap-5">
      <ButtonComponent number={1} />
      <ButtonComponent number={2} />
      <ButtonComponent number={3} />
    </div>
  );
}
