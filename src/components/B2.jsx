import "/src/style.css"

export function B2(props){
    function wordFoundACB(){
        props.onWordFound()
    }

    return (
        <div>
            <p>
            Sissi Wahlsten har gjort sig känd bland Hässelbyborna för att vara den som klädde bronsfigurerna i skulpturen "Resenärerna" varmt flera vintrar i rad i Sissis egenstickade halsdukar. 
            Totalt blev det ett 50-tal halsdukar. Men till slut blev det både för slitsamt och dyrt för Sissi, många halsdukar stals och hon gav upp. Men denna vinter kom traditionen plötsligt 
            tillbaka – utan Sissis vetskap. En okänd person hängde i december egna halsdukar på "Resenärerna", utan att någon <button className="word-btn" onClick={wordFoundACB}>verkar</button> ha sett tilltaget. En morgon var de bara där, säger Sissi. 
            Alla är kusligt lika Sissis egna glesa och smala varianter. Sissi berättade i januari om mysteriet och nu har följeslagaren gett sig till känna. Hon knackade på hemma hos mig häromveckan 
            tillsammans med sin man och berättade att det var hon. Kvinnan berömde det jag gjort, och sa att hon ville föra traditionen vidare. Hon vill vara anonym men är i 30-årsåldern, kan jag 
            säga, berättar Sissi Wahlsten. Kvinnans halsdukar har haft samma färger som Sissis och har satts fast med buntband, vilket även Sissi använde. Det är på pricken likt. Det känns otroligt 
            kul om man inspirerat till detta. Jag hoppas hon fortsätter. Halsdukarna är fantastiska, säger Sissi. Sissi skrattar till när hon berättar att kvinnan först var rädd att Sissi skulle vara arg. 
            </p>
        </div>
    )
}

