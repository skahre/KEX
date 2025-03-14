import "/src/style.css"

export function A1(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            Robotarna är programmerade att känna av fotgängare och hinder omkring sig. Med hjälp av sensorer kan de manövrera sig fram eller stå still till kusten är klar.Vi har tusentals 
            robotar i bruk i andra länder. Det här är inget småskaligt projekt eller test. Vi vet att tekniken fungerar, säger Ahti Heinla, grundare av Starship, det företag som står för 
            robotarna. Samma teknik gör att de kan ta sig över vägar – den scannar av omgivningen för att hitta en lucka då det är säkert att köra. Säkerhet är det viktigaste när det kommer 
            till att i utveckla autonom teknik. Vi har gått genom år av testande där anställda följde robotarna överallt för att se att det fungerade. Samtidigt är det inte svårt att tänka 
            sig att irritation kan uppstå, likt den som fanns kring elsparkcyklarna när de gjorde intåg i stan. Klart att någon kommer försöka <button className="word-btn" onClick={wordFoundACB}>sparka</button> eller klottra på dem, men det har vi 
            rutiner för att hantera. De inspekteras varje kväll, behöver de lagas är de tillbaka ute igen efter en till två dagar, säger Daniel Raba.Jag är inte det minsta orolig. Det är en 
            ny teknik som alla inte kommer att uppskatta, men den ersätter ett helt fordon. Skulle du ha hundrarobotar i stället för hundra fordon så blir Södermalm mer trafikvänligt och 
            öppet. Jag tror att det här är framtiden.
            </p>
        </div>
    )
}

