
export function MidWayView(props){
    function finishSwitchACB(){
        props.onSwitchDone()
    }
    return <div>
        <p>Bra jobbat! Meddela oss att du nu kommit halvvägs och vänta !</p>
        <p>OBS! Klicka ej på knappen</p>
        <button onClick={finishSwitchACB}>Klar</button>
    </div>
}