export default function Joke(props){
    return(
        <div className="w-full flex flex-col justify-center items-center bg-white rounded-lg p-10">
            <h1 className="font-bold text-2xl">{props.setup}</h1>
            <p className="p-4">{props.punchline}</p>
        </div>
    )
}