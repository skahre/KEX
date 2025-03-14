import "/src/style.css"

export function B1(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            Flera skolor har sagt hej då till mobilerna, och på Rödabergsskolan har det gjort mer än att bara tysta notiser – det har satt fart på gemenskapen. Vi har kommit varandra närmare, 
            säger eleven Emelie Krantz. Ljushallen på Rödabergsskolan i Vasastan är full av liv. Ljudet av pingisbollar som studsar mot borden och elevers röster fyller rummet. Mobilerna? De 
            ligger tryggt undangömda i lådor – sedan förra året har skolan varit helt mobilfri. Rektor Anna Bergman berättar att beslutet togs då mobiltelefonerna störde undervisningen, bidrog 
            till kränkningar och hindrade sociala möten. Våra elever fick inte uppleva den sociala samvaron som skolan ska erbjuda, säger hon. Nu, i stället för att scrolla på rasterna, umgås 
            eleverna. Emelie Krantz i årskurs 9 märker en tydlig skillnad. Vi har definitivt fått en bättre gemenskap i klassen. Vi har kommit varandra närmare och <button className="word-btn" onClick={wordFoundACB}>pratar</button> mer med varandra, säger 
            hon. För att underhålla eleverna har skolan satsat på aktiviteter som pingisbord, schack och pussel. Pussel har blivit särskilt populärt. De lägger några bitar då och då och allt 
            får ligga kvar i månader utan att någon förstör det. Det är fantastiskt, säger Bergman. Mobilfria skolor blir allt vanligare i Stockholms stad, särskilt på låg- och mellanstadiet. 
            På högstadiet är det vanligt med mobilförbud under lektionstid, men även antalet helt mobilfria skolor ökar.
            </p>
        </div>
    )
}

