
export function CheckpointView(props){
    function finishSwitchACB(){
        props.onSwitchDone()
    }
    console.log(props.finished)
    return <div>
        {props.finished?
         <p>Bra jobbat! Du är nu klar med testet och kan gå tillbaka till formuläret!</p>
         :
         <p>Bra jobbat! Meddela oss att du nu kommit halvvägs och vänta !</p>
    }
        <p>OBS! Klicka ej på knappen</p>
        <button onClick={finishSwitchACB}>Klar</button>
    </div>
}