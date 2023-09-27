export default function Button(props) {
    return (
    
        <button
          className="bg-gray-100 p-1 border rounded-sm"
          onClick={() => alert(`You clicked on Button ${props.number}!`)}
        >
          Button {props.number}
        </button>
      
    );
  }
  