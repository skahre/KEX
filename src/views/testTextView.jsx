import "/src/style.css"
import { A1 } from "../components/A1"

export function TestTextView(props){
    function wordFoundACB(){
        console.log("yippie")
        props.onWordFound()
    }

    return (
        <div>
            <A1 onWordFound={wordFoundACB}/>
        </div>
    )
}

