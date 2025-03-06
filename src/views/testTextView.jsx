import "/src/style.css"

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

