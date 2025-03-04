import "/src/style.css"
import { A1 } from "../components/A1"

export function TestTextView(props){
    const TestComponent = props.currentTest.component

    function wordFoundACB(){
        console.log("yippie")
        props.onWordFound()
    }

    return (
        <div>
            {TestComponent && <TestComponent onWordFound={wordFoundACB}/>}
        </div>
    )
}

