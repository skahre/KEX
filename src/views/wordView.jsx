import "/src/style.css"

export function WordView(props){

    return (
        <div>
            <h1>Test {props.currentTest.name}</h1>
            <h3>Ordet du ska hitta:</h3>
            <p>{props.currentTest.word}</p>
        </div>
    )
}