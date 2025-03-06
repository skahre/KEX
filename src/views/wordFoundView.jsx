import "/src/style.css"

export function WordFoundView(props){
    function nextTestACB(){
        props.onNextClick()
    }
    return <div>
        <p>Bra Jobbat!</p>
        <button onClick={nextTestACB}>Nästa</button>
    </div>
}