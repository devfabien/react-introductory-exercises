
export default function AnimalList(props) {
    
    return (
      <div className="py-1 flex border items-center gap-7 w-1/3 justify-center" key={props.id}>
        <img src={props.image} alt="animal image" width="70px"/>
        <span>{props.name}</span>
      </div>
    );
  }
  